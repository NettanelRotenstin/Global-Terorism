import { model, Schema } from "mongoose"
import ILocation from "../Types/Interfaces/ILocation"

export const locationSchema = new Schema<ILocation>({
   lat:{
        type:Number,
        default:0
    },
    lon:{
        type:Number,
        default:0
    }
})
   



export const locationModel = model('location', locationSchema)