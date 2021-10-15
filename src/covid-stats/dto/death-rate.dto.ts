import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";



@Exclude()
export class DeathRateDto {

    @ApiProperty()
    @Expose({name: 'deaths'})
    readonly cumulativeDeaths : number;

    @ApiProperty()
    @Expose({name: 'cases'})
    readonly cumulativeCovidCases : number;

    @ApiProperty()
    @Expose({name: 'deathRate'})
    readonly deathRate : number;

}