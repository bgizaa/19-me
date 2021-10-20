import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { CovidStatsService } from '../src/covid-stats/covid-stats.service';
import { CovidStatsModule } from '../src/covid-stats/covid-stats.module';
import { AppConfigModule } from '../src/app-config/app-config.module';
import { mockedDeathStats, mockedVaccinationStats, mockedPostivitityStats } from './dto/test.util';

describe('Covid Stats', () => {
  let app: INestApplication;


  let covidStatsService = {
    getDeathRate: jest.fn().mockResolvedValue(mockedDeathStats),
    getVacinnationRatePerCapita: jest.fn().mockResolvedValue(mockedVaccinationStats),
    getPositivityRatePerCapita: jest.fn().mockResolvedValue(mockedPostivitityStats)
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CovidStatsModule, AppConfigModule],
    })
      .overrideProvider(CovidStatsService)
      .useValue(covidStatsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it('death stats should return 200', async () => {
    return (
      request(app.getHttpServer())
        .get('/death-rate/Warwick')
          .expect(200)
          .expect(mockedDeathStats)

    );
  });



});
