import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString({message: "El id debe ser un uuid"})
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: "El brand debe ser un string"})
    @IsOptional()
    readonly brand?: string;

    @IsString({message: "El model debe ser un string"})
    @IsOptional()
    //@MinLength(3)
    readonly model?: string;

    

}