import { model, Schema } from "mongoose"
import IOrgaAndLocate from "../Types/Interfaces/IOrgaAndLocate"

export const orgaAndLocateSchema = new Schema<IOrgaAndLocate>({
    region:{
         type:String,
         required:true
     },
     organName:{
         type:String,
         required:true
     },
     numEvent:{
        type:Number,
        default:0
     }
 })
    
 
 
 
 export const orgaAndLocateModel = model('orgaAndLocate', orgaAndLocateSchema)