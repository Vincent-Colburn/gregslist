import { dbContext } from "../db/DbContext"

class HousesService {
    async getAll(query = {}) {
        return await dbContext.Houses.find(query)
    }
    async create(body) {
        return await dbContext.Houses.create(body)
    }
    async getOne(id) {
        let houseFound = await dbContext.Houses.findById(id)
        if (!houseId) {
            throw new BadRequest("no house with that id")
        }
        return houseFound
    }
    async delete(id) {
        let houseFound = dbContext.Houses.findByIdAndDelete(id)
        if (!houseFound) {
            throw new BadRequest("no house exists with that id")
        }
        return houseFound
    }
    async edit(id, body) {
        await this.getOne(id)
        let updated = await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
        if (!updated) {
            throw new BadRequest("no house exists with that id cupcake")
        }
        return updated
    }
}

export const housesService = new HousesService()