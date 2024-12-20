import mongoose, { model, Schema } from "mongoose"
import IQ4 from "../Types/Interfaces/IQ4"
import { orgaAndLocateModel } from "./orgaAndLocateModel"


export const q4Schema = new Schema<IQ4>({
    region: {
        type: String,
        required: true
    },
    organizeTopFive: [{
        type: mongoose.Types.ObjectId,
        ref:'orgaAndLocate',
        maxlength:5,
        required:false
    } ]
})


export const q4Model = model('q4', q4Schema)