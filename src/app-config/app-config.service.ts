import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './env.validation';

/**
 * Here, please add any env variable you would like to read in your code without
 * writing ugly code such as `this.configService.get('APP_ENV') === 'production';` everywhere
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get environment(): string {
    return this.configService.get<string>('NODE_ENV');
  }

  get port(): number {
    return this.configService.get<number>('PORT');
  }

  get covidBaseUrl(): string {
    return this.configService.get('COVID_BASE_URL');
  }




}
