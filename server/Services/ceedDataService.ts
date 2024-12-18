import mongoose from 'mongoose'
import data from '../Data/globalterrorismdb_0718dist.json'
import { q1Model } from '../Models/q1Model'
import IQ1 from '../Types/Interfaces/IQ1'

 
export const ceedSchema1 = async ():Promise<void> => {
    try {
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing:mongoose.AnyObject = q1Model.findOne({ attacktype1_txt: element.attacktype1_txt }) 
            if (!existing) {
                const newQ1 = new q1Model({ attacktype1_txt: element.attacktype1_txt, numCasualties: casualties })
                await newQ1.save()
            }
            else {
                 existing.numCasualties += casualties
                 existing.save()
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const calcCasualties = (numOfKill: number | undefined, numOfWound: number | undefined):number => {
    if (typeof (numOfKill) != typeof (1)) {
        numOfKill = 0
    }
    if (typeof (numOfWound) != typeof (1)) {
        numOfWound = 0
    }
    return numOfKill! + numOfWound!
}