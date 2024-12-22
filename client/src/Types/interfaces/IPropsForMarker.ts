export default interface IPropsForMarkers {
    lat?: number
    lon?: number
    attackType?:string
    numCasualties?:number
    region?:string
    country?:string
    city?:string
    locationArr?:{lat:number,lon:number}[]
    year?:number
    month?:number
    numEvent?:number
    organizeTopFive?:{region:string,organName:string,numEvent:number}[]
    organizationName?:string
    organName?:string
    eventid?:number
    iyear?:number
    imonth?:number
    iday?:number
    country_txt?:string
    region_txt?:string
    latitude?:number
    longitude?:number
    attacktype1_txt?:string
    targtype1_txt?:string
    target1?:string
    gname?:string
    weaptype1_txt?:string
    nkill?:number
    nwound?:number
    nperps?:number
    summary?:string
}
