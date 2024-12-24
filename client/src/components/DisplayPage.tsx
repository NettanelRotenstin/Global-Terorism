import React, { Dispatch, SetStateAction, useEffect } from 'react'
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker';
import IQuery from '../Types/interfaces/IQuery';
import Map from '../components/maps/Map'
import '../components/maps/MarkerMap'
import Graph from './Chart';
interface Props {
    markers: IPropsForMarkers[]
    setmarkers: (n: IPropsForMarkers[]) => void
    filter: number
    setFilter: (num: number) => void
    queries: IQuery[]
    setqueries: Dispatch<SetStateAction<IQuery[]>>
    topFive: IPropsForMarkers[]
    setTopFive: (n: IPropsForMarkers[]) => void
    sixth: IPropsForMarkers[]
    setSixth: (n: IPropsForMarkers[]) => void
    firstq: IPropsForMarkers[]
    setthirdq: (n: IPropsForMarkers[]) => void
    thirdq: IPropsForMarkers[]
    fourth: IPropsForMarkers[]
    fifth: IPropsForMarkers[]
    searchBool:boolean
    setsearchBool:(n:any) => void;
    searchData:IPropsForMarkers[]
    thirdRange:IPropsForMarkers[]
}
export default function ({ markers, setmarkers, filter, setFilter, queries, setqueries, topFive, setTopFive, sixth, setSixth, thirdq,thirdRange, firstq, fourth, fifth ,searchBool,setsearchBool,searchData}: Props) {
    useEffect(()=>{
        console.log(searchBool)
        console.log(searchData)
    })
    return (
        <>
        {searchBool &&
                    <Map markers={markers!}
                    setmarkers={setmarkers}
                    filter={filter}
                    setFilter={setFilter}
                    queries={queries}
                    setqueries={setqueries}
                    topFive={topFive!}
                    setTopFive={setTopFive}
                    sixth={sixth!}
                    setSixth={setSixth}
                    setsearchBool={setsearchBool}
                    searchBool={searchBool}
                    searchData={searchData}
                    
                /> 
               
                }
            {filter == 2 || filter == 2.1 || filter == 2.2 || filter == 4 || filter == 4.1 || filter == 2.3 || filter == 6 || searchBool ?
                <Map markers={markers!}
                    setmarkers={setmarkers}
                    filter={filter}
                    setFilter={setFilter}
                    queries={queries}
                    setqueries={setqueries}
                    topFive={topFive!}
                    setTopFive={setTopFive}
                    sixth={sixth!}
                    setSixth={setSixth}
                    setsearchBool={setsearchBool}
                    searchBool={searchBool}
                    searchData={searchData}
                /> : ""}
            {filter == 1 && firstq != undefined?
                <Graph bars={[{ key: "numCasualties", color: "#8894d8", name: "num of casualties" }]} data={firstq!} xKey={'attackType'} /> : ""}
            {filter == 3 && thirdq != undefined?
                <Graph bars={[{ key: "numEvent", color: "#f28919", name: "num of events" }]} data={thirdq} xKey={'month'} /> : ""}
            {filter == 3.1 && thirdRange != undefined?
                <Graph bars={[{ key: "numEvent", color: "#f52630", name: "num of events" }]} data={thirdRange} xKey={'year'} /> : ""}
            {filter == 3.2 && thirdq != undefined?
                <Graph bars={[{ key: "numEvent", color: "#26d3f5", name: "num of events" }]} data={thirdq} xKey={'year'} /> : ""}
            {filter == 3.3 && thirdq != undefined?
                <Graph bars={[{ key: "numEvent", color: "#eaf604", name: "num of events" }]} data={thirdq} xKey={'year'} /> : ""}
            {filter == 4 && fourth != undefined?
                <Graph bars={[{ key: "numEvent", color: "#21f256", name: "num of events" }]} data={fourth} xKey={'organName'} /> : ""}
            {filter == 4.1 && fourth != undefined ?
                <Graph bars={[{ key: "numEvent", color: "#5e51c0", name: "num of events" }]} data={fourth} xKey={'organName'} /> : ""}
            {filter == 5 && fifth != undefined?
                <Graph bars={[{ key: "numEvent", color: "#1322d8", name: "num of events by year" }]} data={fifth!} xKey={'organizationName'} /> : ""}
            {filter == 5.1 && fifth != undefined?
                <Graph bars={[{ key: "numEvent", color: "#f245e3", name: "num of events by organization name" }]} data={fifth!} xKey={'year'} /> : ""}
        </>
    )
}
