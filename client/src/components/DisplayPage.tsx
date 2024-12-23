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
    firstq:IPropsForMarkers[]
}
export default function ({ markers, setmarkers, filter, setFilter, queries, setqueries, topFive, setTopFive, sixth, setSixth }: Props) {
    return (
        <>
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
            />
            {filter == 1 ?
                <Graph bars={[{ key: "numCasualties", color: "#8894d8", name: "num of casualties" }]} data={markers!} xKey={'attackType'} /> : ""}
            {filter == 3 ?
                <Graph bars={[{ key: "numEvent", color: "#7344d8", name: "num of events" }]} data={markers!} xKey={'month'} /> : ""}
            {filter == 3.1 ?
                <Graph bars={[{ key: "numEvent", color: "#2344d8", name: "num of events" }]} data={markers!} xKey={'year'} /> : ""}
            {filter == 3.2 ?
                <Graph bars={[{ key: "numEvent", color: "#2344d8", name: "num of events" }]} data={markers!} xKey={'year'} /> : ""}
            {filter == 3.3 ?
                <Graph bars={[{ key: "numEvent", color: "#2344d8", name: "num of events" }]} data={markers!} xKey={'year'} /> : ""}
        </>
    )
}
