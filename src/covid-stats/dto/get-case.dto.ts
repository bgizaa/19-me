import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCaseDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly country: string;
}
