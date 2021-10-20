import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { WARNING_LEVEL } from "../../common/enums";
import { IsEnum } from 'class-validator';



@Exclude()
export class PositivityPerCapitaDto {

    @ApiProperty()
    @Expose({name: 'population'})
    readonly population : number;

    @ApiProperty()
    @Expose({name: 'cases'})
    readonly cumulativeCases : number;

    @ApiProperty()
    @Expose({name: 'positivityRatePerCapita'})
    readonly positivityRatePerCapita : number;

    @ApiProperty()
    @Expose({name: 'infectionsPerKm'})
    readonly infectionsPerSqKm : number;

    @ApiProperty()
    @Expose({name: 'infectionsPerAThousand'})
    readonly infectionsPerAThousandPeople: number;

    @ApiProperty()
    @Expose({name: 'warningLevel'})
    @IsEnum(WARNING_LEVEL)
    readonly warningLevel : WARNING_LEVEL;

}