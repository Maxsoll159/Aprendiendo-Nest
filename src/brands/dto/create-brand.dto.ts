import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString({message: "Debe ser un string"})
    @MinLength(3, {message: "Debe ser mayor a 3 digitos"})
    readonly name: string;

}
