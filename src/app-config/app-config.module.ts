import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './app-config.service';
import { validate } from './validation';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ validate })],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}