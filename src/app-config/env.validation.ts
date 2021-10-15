import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
  Test = 'test',
}

/*
 * Define each env variable prevent accessing a config property
 * that does not exist.
 */
@Exclude()
export class EnvironmentVariables {
  @Expose()
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @Expose()
  @IsNumber()
  PORT: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  COVID_BASE_URL: string;


}