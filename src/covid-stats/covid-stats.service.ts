import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { HttpService } from '@nestjs/axios';
import { DeathRateDto } from './dto/death-rate.dto';
import { PositivityPerCapitaDto } from './dto/positivity-per-capita.dto';
import { VaccinationPerCapitaDto } from './dto/vaccinate-rate.dto';
import { WARNING_LEVEL } from '../common/enums';
import { TIME_OUT } from '../common/constants';
import { timeout } from 'rxjs/operators';

@Injectable()
export class CovidStatsService {
  constructor(private httpService: HttpService) {}

  async getDeathRate(country: string): Promise<DeathRateDto> {
    const data = await this.httpService
      .get(`cases?country=${country}`)
      .pipe(timeout(TIME_OUT))
      .toPromise()
      .then((res) => res.data)
      .catch((er) => {
        // if data doesn't come in certain structure, throw 500 and tell the user the reason why that error was thrown
      });

    const response = {
      deathRate:
        ((data.All.deaths / data.All.confirmed) * 100).toFixed(2) + '%',
      deaths: data.All.deaths,
      cases: data.All.confirmed,
    };

    return plainToClass(DeathRateDto, response);
  }

  async getPositivityRatePerCapita(
    country: string,
  ): Promise<PositivityPerCapitaDto> {
    const data = await this.httpService
      .get(`cases?country=${country}`)
      .pipe(timeout(TIME_OUT))
      .toPromise()
      .then((res) => res.data);

    const response = {
      positivityRatePerCapita:
        ((data.All.confirmed / data.All.population) * 100).toFixed(2) + '%',
      population: Math.round(
        (data.All.population * 100) / 100,
      ).toLocaleString(),
      cases: Math.round(data.All.confirmed).toLocaleString(),
      infectionsPerAThousand: (
        (data.All.confirmed / data.All.population) *
        1000
      ).toFixed(2),
      infectionsPerKm: (data.All.confirmed / data.All.sq_km_area).toFixed(2),
    };

    let warningLevel;

    if (parseInt(response.positivityRatePerCapita) < 1)
      warningLevel = WARNING_LEVEL.GREEN;
    if (parseInt(response.positivityRatePerCapita) > 1)
      warningLevel = WARNING_LEVEL.YELLOW;
    if (parseInt(response.positivityRatePerCapita) > 1)
      warningLevel = WARNING_LEVEL.RED;

    Object.assign(response, {
      warningLevel,
    });

    return plainToClass(PositivityPerCapitaDto, response);
  }

  async getVacinnationRatePerCapita(
    country: string,
  ): Promise<VaccinationPerCapitaDto> {
    const data = await this.httpService
      .get(`vaccines?country=${country}`)
      .pipe(timeout(TIME_OUT))
      .toPromise()
      .then((res) => res.data);

    const response = {
      vaccinnationRate:
        ((data.All.people_vaccinated / data.All.population) * 100).toFixed(2) +
        '%',
      population: data.All.population,
      vaccinnated: data.All.people_vaccinated,
    };

    return plainToClass(VaccinationPerCapitaDto, response);
  }

  async getAllStats(country: string): Promise<any> {
    const vaccineStats = await this.getVacinnationRatePerCapita(country);
    const deathRateStats = await this.getDeathRate(country);
    const positivityRateStats = await this.getPositivityRatePerCapita(country);

    return {
      vaccineStats,
      deathRateStats,
      positivityRateStats,
    };
  }
}
