import ILocation from "./ILocation"

export default interface IQ2{
    _id:string
    region:string
    numCasualties:number
    country:string
    city:string
    locationArr:ILocation[]
}