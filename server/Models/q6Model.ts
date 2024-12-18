import { model, Schema } from "mongoose"
import IQ6 from "../Types/Interfaces/IQ6"


export const q6Schema = new Schema<IQ6>({
    organName: {
        type: String,
        required: true
    },
    numCasualties: {
        type: Number,
        default:0
    },
    region:{
        type:String
    } 
})


export const q6Model = model('q6', q6Schema)