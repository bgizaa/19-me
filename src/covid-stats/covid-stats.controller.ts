import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CovidStatsService } from './covid-stats.service';
import { AllStatsDto } from './dto/all-stats.dto';
import { DeathRateDto } from './dto/death-rate.dto';
import { GetCaseDto } from './dto/get-case.dto';
import { PositivityPerCapitaDto } from './dto/positivity-per-capita.dto';
import { VaccinationPerCapitaDto } from './dto/vaccinate-rate.dto';


@ApiTags('19 & me stats')
@Controller()
export class CovidStatsController {
  constructor(private readonly covidStatsService: CovidStatsService) {}

  @Get('death-rate/:country')
  getDeathRate(@(Param()) payload: GetCaseDto): Promise<DeathRateDto> {
    return this.covidStatsService.getDeathRate(payload.country);
  }

  @Get('positivity-rate/:country')
  getPositivityRatePerCapita(@(Param()) payload: GetCaseDto): Promise<PositivityPerCapitaDto>  {
    return this.covidStatsService.getPositivityRatePerCapita(payload.country);
  }

  @Get('vaccination-rate/:country')
  getVaccinationRatePerCapita(@(Param()) payload: GetCaseDto): Promise<VaccinationPerCapitaDto>  {
    return this.covidStatsService.getVacinnationRatePerCapita(payload.country);
  }

  @Get('all-stats/:country')
  getAllStats(@(Param()) payload: GetCaseDto)  {
    return this.covidStatsService.getAllStats(payload.country);
  }

}
