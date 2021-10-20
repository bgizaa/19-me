import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";



@Exclude()
export class AllStatsDto {

    @ApiProperty()
    @Expose({name: 'vaccinationRate'})
    readonly vaccinationRate : number;

    @ApiProperty()
    @Expose({name: 'deathRate'})
    readonly mortalityRate : number;

    @ApiProperty()
    @Expose({name: 'positivityRate'})
    readonly positivityRate : number;
    



}