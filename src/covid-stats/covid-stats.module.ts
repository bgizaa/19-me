import { HttpModule, Module } from '@nestjs/common';
import { CovidStatsService } from './covid-stats.service';
import { CovidStatsController } from './covid-stats.controller';
import { AppConfigService } from 'src/app-config/app-config.service';

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
