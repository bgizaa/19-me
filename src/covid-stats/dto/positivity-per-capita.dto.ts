import { Exclude, Expose } from "class-transformer";



@Exclude()
export class PositivityPerCapitaDto {

    @Expose({name: 'population'})
    readonly population : number;

    @Expose({name: 'cases'})
    readonly cumulativeCases : number;

    @Expose({name: 'positivityRatePerCapita'})
    readonly positivityRatePerCapita : number;

}