import { q6Model } from "../Models/q6Model"
import IQ6 from "../Types/Interfaces/IQ6"

export const calcCasualties = (numOfKill: number | undefined, numOfWound: number | undefined):number => {
    if (typeof (numOfKill) != typeof (1)) {
        numOfKill = 0.0
    }
    if (typeof (numOfWound) != typeof (1)) {
        numOfWound = 0.0
    }
    return numOfKill! + numOfWound!
}

 export const calcMost = async(arr:IQ6[])=>{
    const arrToReturn:IQ6[] = []
    for (const element of arr) {
        const reg = await q6Model.find({region:element.region}).sort({numCasualties:-1})
        if(element.numCasualties >= reg[0].numCasualties){
            arrToReturn.push(element)
        }
    }
    return arrToReturn
 }