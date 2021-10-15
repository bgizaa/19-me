import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { CovidStatsModule } from './covid-stats/covid-stats.module';

@Module({
  imports: [CovidStatsModule, AppConfigModule],
})
export class AppModule {}
