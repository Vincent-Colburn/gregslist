import { dbContext } from "../db/DbContext"

class CarsService {
    async getAll(query = {}) {
        return await dbContext.Cars.find(query)
    }
    async create(body) {
        return await dbContext.Cars.create(body)
    }

    async getOne(carId) {
        let carFound = await dbContext.Cars.findById(carId)
        if (!carFound) {
            throw new BadRequest("No car exists with that id")
        }
        return carFound
        // NOTE if you need to do findone instead of findbyId, you need to specify the property you are looking for and the value that you are expecting to be
        //NOTE  you can also findone to find things you are looking for
    }

    async delete(id) {
        let car = dbContext.Cars.findByIdAndDelete(id)
        if (!carFound) {
            throw new BadRequest("no car exists with that Id")
        }
        return carFound
    }
    async edit(id, body) {
        await this.getOne(id)
        let updated = await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
        if (!updated) {
            throw new BadRequest("no car exists with that id")
        }
        return updated
    }
}
export const carsService = new CarsService()