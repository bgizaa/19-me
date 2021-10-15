import { Exclude, Expose } from "class-transformer";



@Exclude()
export class DeathRateDto {

    @Expose({name: 'deaths'})
    readonly cumulativeDeaths : number;

    @Expose({name: 'cases'})
    readonly cumulativeCovidCases : number;

    @Expose({name: 'deathRate'})
    readonly deathRate : number;

}