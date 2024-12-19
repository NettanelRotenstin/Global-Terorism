import { q1Model } from "../Models/q1Model";
import IPost from "../Types/Interfaces/IPost";
import { calcCasualties } from "../Utils/calculator";

export const postEvent = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ1 = await q1Model.findOne({ attackType })
        if (!extQ1) {
            const newQ1 = new q1Model({ attackType, numCasualties: await calcCasualties(nkill, nwound) })
            await newQ1.save()
        }
        else{
            extQ1.numCasualties = extQ1.numCasualties + calcCasualties(nkill,nwound)
            await extQ1.save()
        }
        
    } catch (error) {

    }
}
