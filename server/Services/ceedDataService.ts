import mongoose from 'mongoose'
import data from '../Data/globalterrorismdb_0718dist.json'
import { q1Model } from '../Models/q1Model'
import IQ1 from '../Types/Interfaces/IQ1'
import { calcCasualties } from '../Utils/calculator'
import { q2Model } from '../Models/q2Model'
import { locationModel } from '../Models/locationModel'
import { q3Model } from '../Models/q3Model'

//ceed the kindattack1 to the db model
export const ceedSchema1 = async (): Promise<void> => {
    try {
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject = q1Model.findOne({ attackType: element.attacktype1_txt })
            if (!existing) {
                const newQ1 = new q1Model({ attackType: element.attacktype1_txt, numCasualties: casualties })
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

//ceed the kindattack2 to the db model
export const ceedSchema1Attack2 = async (): Promise<void> => {
    try {
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject = q1Model.findOne({ attackType: element.attacktype2_txt })
            if (!existing) {
                const newQ1 = new q1Model({ attackType: element.attacktype2_txt, numCasualties: casualties })
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

//ceed for schema2
export const ceedSchema2 = async (): Promise<void> => {
    try {
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject = q2Model.findOne({ region: element.region_txt, country: element.country, city: element.city })
            if (!existing) {
                const location = new locationModel({ lat: element.latitude, lon: element.longitude })
                const newQ2 = new q2Model({ region: element.region_txt, country: element.country, city: element.city, locationArr: [location] })
                await newQ2.save()
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

//ceed for schema3
export const ceedSchema3 = async (): Promise<void> => {
    try {
        for (const element of data as any[]) {
            let existing: mongoose.AnyObject = q3Model.findOne({ year: element.iyear, month: element.imonth })
            if (!existing) {
                const newQ3 = new q3Model({ year: element.iyear, month: element.imonth, numEvent: 1 })
                await newQ3.save()
            }
            else {
                existing.numEnent += 1
                existing.save()
            }
        }
    } catch (error) {
        console.log(error)
    }
}


 