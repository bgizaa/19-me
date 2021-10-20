import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './app-config/app-config.service';
import { Environment } from './app-config/env.validation';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envConfig: AppConfigService = app.get(AppConfigService);

  const logger = new Logger();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );

  const config = new DocumentBuilder()
  .setTitle('19 & me')
  .setDescription('Some all-you-need-to-know Covid Stats')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config, {
});

SwaggerModule.setup('api/documentation', app, document);


app.use(helmet());


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
