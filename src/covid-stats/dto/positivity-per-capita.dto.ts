import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";



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

}