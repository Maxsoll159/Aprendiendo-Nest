import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'
@Injectable()
export class BrandsService {

  private brands: Brand[] = [{
    id: uuid(),
    name: "TOYOTA",
    createAt: new Date().getTime()
  }]

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createAt: new Date().getDate(),
      updateAt: new Date().getDate()
    }

    this.brands.push(brand)

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (!brand) throw new NotFoundException(`El id no existe`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    const BrandDB = this.findOne(id)

    this.brands = this.brands.map((brand)=>{
      if(brand.id === id){
        brand = {
          ...BrandDB,
          ...updateBrandDto,
          id
        }
        return brand
      }
      return brand
    })

    return BrandDB;
  }

  remove(id: string) {

    this.brands = this.brands.filter((brand)=> brand.id !== id)

    return this.brands;
  }
}
