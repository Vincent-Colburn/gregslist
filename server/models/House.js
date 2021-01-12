import mongoose from "mongoose"

const Schema = mongoose.Schema

const House = new Schema(
    {
        bedrooms: { type: String, required: true },
        bathrooms: { type: String, required: true },
        levels: { type: Number, required: true },
        year: { type: Number, required: true, min: 1894, max: 2021 },
        price: { type: Number, required: true },
        description: { type: String, maxlength: 150 },
        imgUrl: {
            type: String, default: "http://placehold.it/200x200"
        }

    }
)

export default House