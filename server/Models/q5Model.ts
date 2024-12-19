import { model, Schema } from "mongoose"
import IQ5 from "../Types/Interfaces/IQ5"


export const q5Schema = new Schema<IQ5>({
    organizationName: {
        type: String,
        required: true
    },
    numEvent: {
        type: Number,
        default:0
    },
    year:{
        type:Number,
        required:true
    }
})


export const q5Model = model('q5', q5Schema)