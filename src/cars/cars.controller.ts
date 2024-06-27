import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)

export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }
    @Get(":id")
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findAllById(id)
    }

    @Post()
    postCar(@Body() body: CreateCarDto) {
        return this.carsService.createCar(body)
    }

    @Patch(":id")
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCarDto) {
        return body
    }

    @Delete(":id")
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCar(id)
    }

}
