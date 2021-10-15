import { IsNotEmpty, IsString } from 'class-validator';

export class GetCaseDto {
  @IsNotEmpty()
  @IsString()
  readonly country: string;
}
