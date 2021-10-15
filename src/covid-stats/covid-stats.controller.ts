import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CovidStatsService } from './covid-stats.service';
import { GetCaseDto } from './dto/get-case.dto';


@Controller()
export class CovidStatsController {
  constructor(private readonly covidStatsService: CovidStatsService) {}

  @Get('cases/:country')
  getDeathRate(@(Param()) payload: GetCaseDto) {
    return this.covidStatsService.getDeathRate(payload.country);
  }


}
