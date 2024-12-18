import { model, Schema } from "mongoose"
import ILocation from "../Types/Interfaces/ILocation"

export const locationSchema = new Schema<ILocation>({
   lat:{
        type:String,
        required:true
    },
    lon:{
        type:String,
        required:true
    }
})
   



export const locationModel = model('location', locationSchema)