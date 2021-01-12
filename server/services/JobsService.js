import { dbContext } from "../db/DbContext"

class JobsService {
    async getAll(query = {}) {
        return await dbContext.Jobs.find(query)
    }
    async create(body) {
        return await dbContext.Jobs.create(body)
    }
    async getOne(id) {
        let jobFound = await dbContext.Jobs.findById(id)
        if (!jobId) {
            throw new BadRequest("no job with that id")
        }
        return jobFound
    }
    async delete(id) {
        let jobFound = dbContext.Jobs.findByIdAndDelete(id)
        if (!jobFound) {
            throw new BadRequest("no job exists with that id")
        }
        return jobFound
    }
    async edit(id, body) {
        await this.getOne(id)
        let updated = await dbContext.Jobs.findByIdAndUpdate(id, body, { new: true })
        if (!updated) {
            throw new BadRequest("no job exists with that id cupcake")
        }
        return updated
    }
}

export const jobsService = new JobsService()