import { Module } from '@nestjs/common';
import { HttpModule  } from '@nestjs/axios';
import { CovidStatsService } from './covid-stats.service';
import { CovidStatsController } from './covid-stats.controller';
import { AppConfigService } from '../app-config/app-config.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => ({
        baseURL: appConfigService.covidBaseUrl,
      }),
    }),

  ],
  controllers: [CovidStatsController],
  providers: [CovidStatsService]
})
export class CovidStatsModule {}
