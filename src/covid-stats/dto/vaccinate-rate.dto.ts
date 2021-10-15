import { Exclude, Expose } from "class-transformer";



@Exclude()
export class VaccinationPerCapitaDto {

    @Expose({name: 'population'})
    readonly population : number;

    @Expose({name: 'vaccinnated'})
    readonly fullyVaccinated : number;

    @Expose({name: 'vaccinnationRate'})
    readonly vaccinationRate : number;

}