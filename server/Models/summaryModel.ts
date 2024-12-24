import { model, Schema } from "mongoose"
import ISummary from "../Types/Interfaces/ISummary"
import IPostAll from "../Types/Interfaces/IPostAll"

export const summarySchema = new Schema<IPostAll>({
    eventid: {
        type: Number,
      },
      year: {
        type: Number,
        default: 0,
      },
      month: {
        type: Number,
        default: 0,
      },
      iday: {
        type: Number,
        default: 0,
      },
      country: {
        type: String,
      },
      region: {
        type: String,
      },
      city: {
        type: String,
      },
      lat: {
        type: Number,
        default: 0,
      },
      lon: {
        type: Number,
        default: 0,
      },
      attackType: {
        type: String,
      },
      targtype1_txt: {
        type: String,
      },
      target1: {
        type: String
      },
      organName: {
        type: String
      },
      weaptype1_txt: {
        type: String
      },
      nkill: {
        type: Number
      },
      nwound: {
        type: Number
      },
      nperps: {
        type: Number,
      },
      summary: {
        type: String
      }
})
   

export const summaryModel = model('summary', summarySchema)

 