import { locationModel } from "../Models/locationModel"
import { q1Model } from "../Models/q1Model"
import { q2Model } from "../Models/q2Model"
import { q3Model } from "../Models/q3Model"
import { q4Model } from "../Models/q4Model"
import { q5Model } from "../Models/q5Model"
import { q6Model } from "../Models/q6Model"
import ILocation from "../Types/Interfaces/ILocation"
import IPost from "../Types/Interfaces/IPost"
import { calcCasualties } from "../Utils/calculator"

export const deleteEvent = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const location = new locationModel({ lat, lon })
        await location.save()
        await deleteQ1(event)
        await deleteQ2(event, location)
        await deleteQ3(event)
        await deleteQ5(event)
        await deleteQ6(event)
    } catch (error) {
        console.log(error)
    }
}


const deleteQ1 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ1 = await q1Model.findOne({ attackType })
        if (!extQ1) {
            throw new Error('no one to delete!')
        }
        else {
            if (extQ1.numCasualties - calcCasualties(nkill, nwound) >= 0) {
                extQ1.numCasualties = extQ1.numCasualties - calcCasualties(nkill, nwound)
            }
            await extQ1.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}

const deleteQ2 = async (event: IPost, location: ILocation) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ2 = await q2Model.findOne({ region, country, city })
        if (!extQ2) {
            throw new Error('no one to delete!')
        }
        else {
            const allLocations = await locationModel.findOneAndDelete({ lat: location.lat, lon: location.lon })
            if (extQ2.numCasualties - calcCasualties(nkill, nwound) >= 0) {
                extQ2.numCasualties = extQ2.numCasualties - calcCasualties(nkill, nwound)
            }
            extQ2.locationArr.filter(loc => loc.lat != location.lat && loc.lon != location.lon)
            await extQ2.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const deleteQ3 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ3 = await q3Model.findOne({ year, month })
        if (!extQ3) {
            throw new Error('no one to delete!')
        }
        else {
            if (extQ3.numEvent - 1 >= 0) {
                extQ3.numEvent = extQ3.numEvent - 1
            }
            await extQ3.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const deleteQ5 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event

        const extQ5 = await q5Model.findOne({ organizationName: organName, year })
        if (!extQ5) {
            throw new Error('no one to delete!')
        }
        else {
            if (extQ5.numEvent - 1 >= 0) {
                extQ5.numEvent = extQ5.numEvent - 1
            }
            await extQ5.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const deleteQ6 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ6 = await q6Model.findOne({ organName, region })
        if (!extQ6) {
            throw new Error('no one to delete!')
        }
        else {
            if (extQ6.numCasualties - calcCasualties(nkill, nwound) >= 0) {
                extQ6.numCasualties = extQ6.numCasualties - calcCasualties(nkill, nwound)
            }
            await extQ6.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}