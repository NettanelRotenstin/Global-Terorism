import { model, Schema } from "mongoose"
import IQ1 from "../Types/Interfaces/IQ1"

export const q1Schema = new Schema<IQ1>({
    attackType:{
        type:String,
        required:true
    },
    numCasualties:{
        type:Number,
        default:0
    }
})
   



export const q1Model = model('q1', q1Schema)