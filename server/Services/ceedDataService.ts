import mongoose from 'mongoose'
import { q1Model } from '../Models/q1Model'
import IQ1 from '../Types/Interfaces/IQ1'
import { calcCasualties } from '../Utils/calculator'
import { q2Model } from '../Models/q2Model'
import { locationModel } from '../Models/locationModel'
import { q3Model } from '../Models/q3Model'
import fs from 'fs/promises';
import { orgaAndLocateModel } from '../Models/orgaAndLocateModel'
import { q4Model } from '../Models/q4Model'
import { q5Model } from '../Models/q5Model'
import { q6Model } from '../Models/q6Model'

export const getFileData = async <T>(): Promise<T[] | void> => {
    try {
        const dataFromFile: any = (await fs.readFile(`/Users/netanelrotenstein/Desktop/fullStuck/Global Terorism/server/Data/globalterrorismdb_0718dist.json`, 'utf-8'));
        const parsaData: T[] = await JSON.parse(dataFromFile);
        return parsaData;
    } catch (error) {
        console.log(error);
    }
}

//ceed the kindattack1 to the db model
export const ceedSchema1 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()

        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject | null = await q1Model.findOne({ attackType: element.attacktype1_txt })
            if (!existing) {
                const newQ1 = new q1Model({ attackType: element.attacktype1_txt, numCasualties: casualties })
                await newQ1.save()
            }
            else {
                existing.numCasualties += casualties
                await existing.save()
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}

//ceed the kindattack2 to the db model
export const ceedSchema1Attack2 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            if (typeof (element.attacktype2_txt) != typeof ("hvh")) { continue }
            let existing: mongoose.AnyObject | null = await q1Model.findOne({ attackType: element.attacktype2_txt })
            if (!existing) {
                const newQ1 = new q1Model({ attackType: element.attacktype2_txt, numCasualties: casualties })
                await newQ1.save()
            }
             
            else {
                existing.numCasualties += casualties
                await existing.save()
            }
        }
        console.log('1')
    } catch (error) {
        console.log(error)
    }
}

//ceed for schema2
export const ceedSchema2 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject | null = await q2Model.findOne({ region: element.region_txt, country: element.country_txt, city: element.city })
            const location = new locationModel({ lat: element.latitude, lon: element.longitude })
            if (!existing) {
                const newQ2 = new q2Model({ region: element.region_txt, country: element.country_txt, city: element.city, locationArr: [location] })
                await newQ2.save()
            }
            else {
                existing.numCasualties += casualties
                existing.locationArr.push(location)
                await existing.save()
            }
        }
        console.log(2)
    } catch (error) {
        console.log(error)
    }
}

//ceed for schema3
export const ceedSchema3 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        for (const element of data as any[]) {
            let existing: mongoose.AnyObject | null = await q3Model.findOne({ year: element.iyear, month: element.imonth })
            if (!existing) {
                const newQ3 = new q3Model({ year: element.iyear, month: element.imonth, numEvent: 1 })
                await newQ3.save()
            }
            else {
                existing.numEvent = existing.numEvent + 1
                await existing.save()
            }
        }
        console.log(3)
    } catch (error) {
        console.log(error)
    }
}

//ceed for schema4
export const ceedOrgan = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        for (const element of data as any[]) {
            let existing: mongoose.AnyObject | null = await orgaAndLocateModel.findOne({ region: element.region_txt, organName: element.gname })
            if (!existing) {
                const newOrga = new orgaAndLocateModel({ region: element.region_txt, organName: element.gname, numEvent: 1 })
                await newOrga.save()
            }
            else {
                existing.numEvent += 1
                await existing.save()
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}




//ceed for schema4
export const ceedSchema4 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        for (const element of data as any[]) {
            let existing: mongoose.AnyObject | null = await q4Model.findOne({ region: element.region_txt })
            if (!existing) {
                const newQ4 = new q4Model({ region: element.region_txt })
                let orgs = await orgaAndLocateModel.find({ region: element.region_txt }).sort({ numEvent: -1 })
                newQ4.organizeTopFive.push(orgs[4], orgs[3], orgs[2], orgs[1], orgs[0])
                await newQ4.save()
            }
            else {
                continue
            }
        }
        console.log(4)
    } catch (error) {
        console.log(error)
    }
}

//ceed for schema5
export const ceedSchema5 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        for (const element of data as any[]) {
            let existing: mongoose.AnyObject | null = await q5Model.findOne({ year: element.iyear, organizationName: element.gname })
            if (!existing) {
                const newQ5 = new q5Model({ year: element.iyear, organizationName: element.gname, numEvent: 1 })
                await newQ5.save()
            }
            else {
                existing.numEvent = existing.numEvent + 1
                await existing.save()
            }
        }
        console.log(5)
    } catch (error) {
        console.log(error)
    }
}

//ceed for schema6
export const ceedSchema6 = async (): Promise<void> => {
    try {
        const data: any = await getFileData()
        let casualties: number = 0
        for (const element of data as any[]) {
            casualties = await calcCasualties(element.nkill, element.nwound)
            let existing: mongoose.AnyObject | null = await q6Model.findOne({ region: element.region_txt, organName: element.gname })
            if (!existing) {
                const newQ6 = new q6Model({ region: element.region_txt, organName: element.gname ,numCasualties:casualties })
                await newQ6.save()
            }
            else {
                existing.numCasualties = existing.numCasualties + casualties
                await existing.save()
            }
        }
        console.log(6)
    } catch (error) {
        console.log(error)
    }
}
 
