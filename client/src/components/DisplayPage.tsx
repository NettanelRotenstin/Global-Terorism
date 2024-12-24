import React, { Dispatch, SetStateAction } from 'react'
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
}
export default function ({ markers, setmarkers, filter, setFilter, queries, setqueries, topFive, setTopFive, sixth, setSixth, thirdq, firstq, fourth, fifth }: Props) {
    return (
        <>
            {filter == 2 || filter == 2.1 || filter == 2.2 || filter == 4 || filter == 4.1 || filter == 2.3 || filter == 6 ?
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
                /> : ""}
            {filter == 1 ?
                <Graph bars={[{ key: "numCasualties", color: "#8894d8", name: "num of casualties" }]} data={firstq!} xKey={'attackType'} /> : ""}
            {filter == 3 ?
                <Graph bars={[{ key: "numEvent", color: "#f28919", name: "num of events" }]} data={thirdq} xKey={'month'} /> : ""}
            {filter == 3.1 ?
                <Graph bars={[{ key: "numEvent", color: "#f52630", name: "num of events" }]} data={thirdq} xKey={'year'} /> : ""}
            {filter == 3.2 ?
                <Graph bars={[{ key: "numEvent", color: "#26d3f5", name: "num of events" }]} data={thirdq} xKey={'year'} /> : ""}
            {filter == 3.3 ?
                <Graph bars={[{ key: "numEvent", color: "#eaf604", name: "num of events" }]} data={thirdq} xKey={'year'} /> : ""}
            {filter == 4 ?
                <Graph bars={[{ key: "numEvent", color: "#21f256", name: "num of events" }]} data={fourth} xKey={'organName'} /> : ""}
            {filter == 4.1 ?
                <Graph bars={[{ key: "numEvent", color: "#5e51c0", name: "num of events" }]} data={fourth} xKey={'organName'} /> : ""}
            {filter == 5 ?
                <Graph bars={[{ key: "numEvent", color: "#1322d8", name: "num of events by year" }]} data={fifth!} xKey={'organizationName'} /> : ""}
            {filter == 5.1 ?
                <Graph bars={[{ key: "numEvent", color: "#f245e3", name: "num of events by organization name" }]} data={fifth!} xKey={'year'} /> : ""}
        </>
    )
}
