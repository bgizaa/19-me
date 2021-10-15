import { Exclude, Expose } from "class-transformer";



@Exclude()
export class DeathRateDto {

    @Expose({name: 'deaths'})
    readonly deaths : number;

    @Expose({name: 'cases'})
    readonly cases : number;

}