import { HttpService, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeathRateDto } from './dto/death-rate.dto';

@Injectable()
export class CovidStatsService {
  constructor(private httpService: HttpService) {}

  async getDeathRate(country: string): Promise<any> {

    const  data = await this.httpService
      .get(`cases?country=${country}`)
      .toPromise()
      .then((res) => res.data);
    return data
  }
}


