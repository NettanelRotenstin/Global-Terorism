import { model, Schema } from "mongoose"
import ISummary from "../Types/Interfaces/ISummary"

export const summarySchema = new Schema<ISummary>({
    eventid:{
        type:Number,
        default:0
    },
    iyear:{
        type:Number,
        default:0
    },
    imonth:{
        type:Number,
        default:0
    },
    iday:{
        type:Number,
        default:0
    },
    country_txt:{
        type:String,
        default:""
    },
    region_txt:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    latitude:{
        type:Number,
        default:0
    },
    longitude:{
        type:Number,
        default:0
    },
    attacktype1_txt:{
        type:String,
        default:""
    },
    targtype1_txt:{
        type:String,
        default:""
    },
    target1:{
        type:String,
        default:""
    },
    gname:{
        type:String,
        default:""
    },
    weaptype1_txt:{
        type:String,
        default:""
    },
    nkill:{
        type:Number,
        default:0
    },
    nwound:{
        type:Number,
        default:0
    },
    nperps:{
        type:Number,
        default:0
    },
    summary:{
        type:String,
        default:0
    }
})
   

export const summaryModel = model('summary', summarySchema)

 