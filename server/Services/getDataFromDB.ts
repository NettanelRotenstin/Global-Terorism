import { orgaAndLocateModel } from "../Models/orgaAndLocateModel";
import { q1Model } from "../Models/q1Model";
import { q2Model } from "../Models/q2Model";
import { q3Model } from "../Models/q3Model";
import { q4Model } from "../Models/q4Model";
import IOrgaAndLocate from "../Types/Interfaces/IOrgaAndLocate";
import IQ1 from "../Types/Interfaces/IQ1";
import IQ2 from "../Types/Interfaces/IQ2";
import IQ3 from "../Types/Interfaces/IQ3";
import IQ4 from "../Types/Interfaces/IQ4";
import '../Models/locationModel'
import IQ6 from "../Types/Interfaces/IQ6";
import { q6Model } from "../Models/q6Model";
import { calcMost } from "../Utils/calculator";

export const getQ1Service = async () => {
    try {
        const result: IQ1[]|any = await q1Model.find({}).sort({numCasualties:-1})       
        return result
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getQ2Service = async () => {
    try {
        const result: IQ2[] | any = await q2Model.find({}).populate('locationArr')
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getQ3Service = async () => {
    try {
        const result: IQ3[] = await q3Model.find({})
        console.log(result[0])
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getQ4ServiceAll = async () => {
    try {
        const result: IOrgaAndLocate[] = await orgaAndLocateModel.find({}).sort({numEvent:-1})
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getQ4ServiceArea = async (reg:string) => {
    try {
        const result: IQ4[] | any = await q4Model.findOne({region:reg}).populate('organizeTopFive') 
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getQ6ServiceArea = async (org:string) => {
    try {
        const result: IQ6[] | any = await q6Model.find({organName:org})
        const calcmost = calcMost(result)
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}
// organName:string
// numCasualties:number
// region:string
