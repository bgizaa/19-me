import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './app-config/app-config.service';
import { Environment } from './app-config/env.validation';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envConfig: AppConfigService = app.get(AppConfigService);

  const logger = new Logger();


  await app.listen(
    envConfig.port,
    () =>
      envConfig.environment === Environment.Development &&
      logger.verbose(
        `19 & me is running at http://localhost:${envConfig.port}💉 `,
      ),
  );
}
bootstrap();
