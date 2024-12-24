import IPost from "./IPost";

export default interface IPostAll extends IPost {
    eventid?: number
    year?: number
    month?: number
    iday?: number
    country?: string
    region?: string
    city?: string
    lat?: number
    lon?: number
    attackType?: string
    targtype1_txt?: string
    target1?: string
    organName?: string
    weaptype1_txt?: string
    nkill?: number
    nwound?: number
    nperps?: number
    summary?: string
  }