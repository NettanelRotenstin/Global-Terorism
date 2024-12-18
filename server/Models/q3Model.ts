import { model, Schema } from "mongoose"
import IQ3 from "../Types/Interfaces/IQ3"


export const q3Schema = new Schema<IQ3>({
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        default: 0
    },
    numEvent: {
        type: Number,
        default: 0
    }
})


export const q3Model = model('q3', q3Schema)