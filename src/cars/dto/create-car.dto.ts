import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({message: "El brand debe ser un string"})
    readonly brand: string;

    @IsString({message: "El model debe ser un string"})
    //@MinLength(3)
    readonly model: string;

    

}