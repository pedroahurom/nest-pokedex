import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator"

export class CreatePokemonDto {

    //isInt, ISPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number

    //isString, min 1
    @IsString()
    @MinLength(1)
    name:string
}
