import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";



@Exclude()
export class VaccinationPerCapitaDto {

    @ApiProperty()
    @Expose({name: 'population'})
    readonly population : number;

    @ApiProperty()
    @Expose({name: 'vaccinnated'})
    readonly fullyVaccinated : number;

    @ApiProperty()
    @Expose({name: 'vaccinnationRate'})
    readonly vaccinationRate : number;

}