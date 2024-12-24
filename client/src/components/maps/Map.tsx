import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IPropsForMarkers from '../../Types/interfaces/IPropsForMarker';
import IQuery from '../../Types/interfaces/IQuery';
import { LatLngExpression } from 'leaflet';

interface Props {
    markers: IPropsForMarkers[];
    setmarkers: (n: IPropsForMarkers[]) => void;
    filter: number;
    setFilter: (num: number) => void;
    queries: IQuery[];
    setqueries: Dispatch<SetStateAction<IQuery[]>>
    topFive: IPropsForMarkers[]
    setTopFive: (n: IPropsForMarkers[]) => void;
    sixth: IPropsForMarkers[]
    setSixth: (n: IPropsForMarkers[]) => void;
    searchBool: boolean
    setsearchBool: (n: any) => void;
    searchData: IPropsForMarkers[]
}
export default function Map({ filter, setFilter, queries, setqueries, markers, setmarkers, setTopFive, topFive, setSixth, sixth, searchBool, setsearchBool, searchData }: Props) {
    function SetMapCenter({ center }: { center: [number, number] }) {
        const map = useMap()

        useEffect(() => {
            if (center) {
                map.setView(center);
            }
        }, [center, map]);

        return null;
    }

    const myCenter = (): [number, number] => {
        return markers.length > 0 && markers != undefined
            ? [markers[0].locationArr![0].lat, markers[0].locationArr![0].lon]
            : [2, 2];
    }

    const myCenterSearch = (): [number, number] => {
        return searchData.length > 0 && searchData != undefined
            ? [searchData[0].lat!, searchData[0].lon!]
            : [2, 2];
    }

    const getLAtLonbyArea = (regoin: string): [number, number] => {
        switch (regoin) {
            case "Central America & Caribbean":
                return [-30.2928485, 153.1256159]
            case "North America":
                return [40.87589, -81.40234];
            case "Southeast Asia":
                return [-8.7287308, 115.2365646];
            case "Western Europe":
                return [53.8598291, 27.5535313];
            case "East Asia":
                return [32.0959836, 118.9115843];
            case "South America":
                return [-21.0002179, -61.0006565];
            case "Eastern Europe":
                return [50.2659033, 18.6975762];
            case "Sub-Saharan Africa":
                return [7.1881, 21.09375];
            case "Middle East & North Africa":
                return [39.3014159, -76.5888477];
            case "Australasia & Oceania":
                return [-30.0000769, 139.9998196];
            case "South Asia":
                return [1.3019038, 103.7775058];
            case "Central Asia":
                return [-6.2360561, 106.8571285];
        }
        return [0, 0]
    }
    return (
        <>
            {(markers != undefined || searchBool) &&
                <div style={{ height: '80vh', borderRightColor: 'red' }}>
                    {filter == 2 ? <div>
                        <MapContainer center={myCenter() as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {markers.map(x => x.locationArr![0].lat != null && x.locationArr![0].lon != null && <>
                                <Marker position={[x.locationArr![0].lat, x.locationArr![0].lon,]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></>)}
                        </MapContainer>
                    </div> :
                        filter == 2.1 ? <div>
                            <MapContainer center={myCenter() as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                <SetMapCenter center={myCenter() as [number, number]} />
                                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                {markers.map(x => x.locationArr![0].lat != null && x.locationArr![0].lon != null && <>
                                    <Marker position={[x.locationArr![0].lat, x.locationArr![0].lon,]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></>)}
                            </MapContainer>
                        </div>
                            :
                            searchBool ? <div>
                                <MapContainer center={myCenterSearch() as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                    <SetMapCenter center={myCenterSearch() as [number, number]} />
                                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    {searchData.map(x => x.lat != null && x.lon != null && <>
                                        <Marker position={[x.lat, x.lon,]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> nKill:{x.nkill}</Popup></Marker></>)}
                                </MapContainer>
                            </div>
                                :
                                filter == 2.2 ? <div>
                                    <MapContainer center={myCenter() as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                        <SetMapCenter center={myCenter() as [number, number]} />
                                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                        {markers.map(x => x.locationArr![0].lat != null && x.locationArr![0].lon != null && <>
                                            <Marker position={[x.locationArr![0].lat, x.locationArr![0].lon,]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></>)}
                                    </MapContainer>
                                </div>
                                    :

                                    filter == 2.3 && markers ? <div>
                                        <MapContainer center={myCenter() as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                            <SetMapCenter center={myCenter() as [number, number]} />
                                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                            {markers.map(x => x.locationArr![0].lat != null && x.locationArr![0].lon != null && <>
                                                <Marker position={[x.locationArr![0].lat, x.locationArr![0].lon,]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></>)}
                                        </MapContainer>
                                    </div>
                                        :

                                        filter == 4 ? topFive != undefined && <div>
                                            <MapContainer center={getLAtLonbyArea(topFive[0].region!) as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                                <SetMapCenter center={getLAtLonbyArea(topFive[0].region!)} />
                                                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                {filter == 4 && <>
                                                    <Marker
                                                        position={getLAtLonbyArea(topFive[0].region!)}>
                                                        <Popup> region:{topFive[0].region}<br></br>
                                                            top1:{topFive![0].organizeTopFive![0].organName}<br></br>
                                                            top1:{topFive![0].organizeTopFive![0].numEvent}<br></br>
                                                            top2:{topFive![0].organizeTopFive![1].organName}<br></br>
                                                            top2:{topFive![0].organizeTopFive![1].numEvent}<br></br>
                                                            top3:{topFive![0].organizeTopFive![2].organName}<br></br>
                                                            top3:{topFive![0].organizeTopFive![2].numEvent}<br></br>
                                                            top4:{topFive![0].organizeTopFive![3].organName}<br></br>
                                                            top4:{topFive![0].organizeTopFive![3].numEvent}<br></br>
                                                            top5:{topFive![0].organizeTopFive![4].organName}<br></br>
                                                            top5:{topFive![0].organizeTopFive![4].numEvent}
                                                        </Popup>

                                                    </Marker>
                                                </>
                                                }
                                            </MapContainer>
                                        </div> :
                                            filter == 4.1 ? topFive != undefined && <div>
                                                <MapContainer center={getLAtLonbyArea(topFive[0].region!) as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                                    <SetMapCenter center={getLAtLonbyArea(topFive[0].region!)} />
                                                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                    {filter == 4.1 && topFive != undefined && topFive.map(x => <>
                                                        <Marker
                                                            position={getLAtLonbyArea(x.region!)}>
                                                            <Popup> region:{x.region}<br></br>
                                                                top1:{x.organizeTopFive![0].organName}<br></br>
                                                                top1:{x.organizeTopFive![0].numEvent}<br></br>
                                                                top2:{x.organizeTopFive![1].organName}<br></br>
                                                                top2:{x.organizeTopFive![1].numEvent}<br></br>
                                                                top3:{x.organizeTopFive![2].organName}<br></br>
                                                                top3:{x.organizeTopFive![2].numEvent}<br></br>
                                                                top4:{x.organizeTopFive![3].organName}<br></br>
                                                                top4:{x.organizeTopFive![3].numEvent}<br></br>
                                                                top5:{x.organizeTopFive![4].organName}<br></br>
                                                                top5:{x.organizeTopFive![4].numEvent}
                                                            </Popup>

                                                        </Marker>
                                                    </>)
                                                    }
                                                </MapContainer>
                                            </div>
                                                :
                                                filter == 6 ? sixth != undefined && <div>
                                                    <MapContainer center={getLAtLonbyArea(sixth[0].region!) as LatLngExpression | undefined} zoom={10} scrollWheelZoom={false} style={{ height: "80vh" }}>
                                                        <SetMapCenter center={getLAtLonbyArea(sixth[0].region!)} />
                                                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                        {filter == 6 && sixth != undefined && sixth.map(x => <>
                                                            <Marker
                                                                position={getLAtLonbyArea(x.region!)}>
                                                                <Popup> region:{x.region}<br></br>
                                                                    organName:{x.organName}<br></br>
                                                                    numCasualties:{x.numCasualties}<br></br>
                                                                </Popup>
                                                            </Marker>
                                                        </>)
                                                        }
                                                    </MapContainer>
                                                </div> :
                                                    <>asdasd</>

                    }
                </div>
            }
        </>
    )
}