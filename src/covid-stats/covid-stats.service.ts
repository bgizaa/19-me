import { HttpService, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeathRateDto } from './dto/death-rate.dto';
import { PositivityPerCapitaDto } from './dto/positivity-per-capita.dto';
import { VaccinationPerCapitaDto } from './dto/vaccinate-rate.dto';

@Injectable()
export class CovidStatsService {
  constructor(private httpService: HttpService) {}

  async getDeathRate(country: string): Promise<DeathRateDto> {
    const data = await this.httpService
      .get(`cases?country=${country}`)
      .toPromise()
      .then((res) => res.data);

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
      .toPromise()
      .then((res) => res.data);

    const response = {
      positivityRatePerCapita: ((data.All.confirmed / data.All.population) * 100).toFixed(2) + '%',
      population: data.All.population,
      cases: data.All.confirmed,
    };

    return plainToClass(PositivityPerCapitaDto, response);
  }

  async getVacinnationRatePerCapita(
    country: string,
  ): Promise<VaccinationPerCapitaDto> {
    const data = await this.httpService
      .get(`vaccines?country=${country}`)
      .toPromise()
      .then((res) => res.data);

    const response = {
      vaccinnationRate: ((data.All.people_vaccinated / data.All.population) * 100).toFixed(2) + '%',
      population: data.All.population,
      vaccinnated: data.All.people_vaccinated,
    };

    return plainToClass(VaccinationPerCapitaDto, response);
  }
}
