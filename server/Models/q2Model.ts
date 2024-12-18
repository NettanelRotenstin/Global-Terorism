import mongoose, { model, Schema } from "mongoose"
import IQ2 from "../Types/Interfaces/IQ2"
import { locationModel } from "./locationModel"

export const q2Schema = new Schema<IQ2>({
    region:{
        type:String,
        required:true
    },
    numCasualties:{
        type:Number,
        default:0
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    locationArr:[{
        type:mongoose.Schema.ObjectId,
        ref:'location'
    }]
})
   

export const q2Model = model('q2', q2Schema)