import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto{
    @IsString({message: "Debe ser un string"})
    @MinLength(3, {message: "Debe ser mayor a 3 digitos"})
    readonly name: string;
}