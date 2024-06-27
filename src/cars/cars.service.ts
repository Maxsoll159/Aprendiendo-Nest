import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Injectable()
export class CarsService {
    private cars: Car[] = [{
        id: uuid(),
        brand: "Toyota",
        model: "Corolla"
    }, {
        id: uuid(),
        brand: "Honda",
        model: "Civic"
    }, {
        id: uuid(),
        brand: "Jeep",
        model: "Cheroke"
    }]

    findAll() {
        return this.cars
    }

    findAllById(id: string) {
        const car = this.cars.find((car) => car.id === id)

        if (!car) throw new NotFoundException(`El ${id} no existe`)

        return car
    }

    createCar(body: CreateCarDto) {
        const newCar: Car = {
            ...body,
            id: uuid(),
        }
        const response = this.cars.push(newCar)
        return newCar
    }

    updateCar(body: UpdateCarDto, id: string) {

        let carDB: Car = this.findAllById(id)

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...body,
                    id
                }
                return carDB
            }
            return car
        })
        return carDB
    }

    deleteCar(id: string) {
        let deleteCar = this.cars.filter(car => car.id !== id)
        this.cars = deleteCar
        return this.cars
    }

}
