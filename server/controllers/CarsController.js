import BaseController from "../utils/BaseController"
import { carsService } from "../services/CarsService"

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        // NOTE The super just adds on to the URL to gain access and it is required
        this.router
            .get("", this.getAll)
            .get("/:carId", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete)
            .put("/:id", this.edit)

    }
    async getAll(req, res, next) {
        try {
            res.send(await carsService.getAll(req.query))
            // NOTE res.send(await carsService.getAll(req.query))

        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            res.send(await carsService.getOne(req.params.carId))
            // NOTE req.params is everything inside the var
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await carsService.create(req.body))

            // NOTE 
            // you can also 
            // let car = carsService.create(req.body)
            // res.send(car)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await carsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            res.send(await carsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

}