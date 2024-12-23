import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import IPropsForMarkers from '../../Types/interfaces/IPropsForMarker';
import IQuery from '../../Types/interfaces/IQuery';

interface Props {
  markers: IPropsForMarkers[];
  setmarkers: (n: IPropsForMarkers[]) => void;
  filter: number;
  setFilter: (num: number) => void;
  queries: IQuery[];
  setqueries: Dispatch<SetStateAction<IQuery[]>>
}
export default function Map({ filter, setFilter, queries, setqueries,markers,setmarkers }: Props) {
  return (
    <>
    { markers != undefined &&
    <div style={{height:'80vh', borderRightColor:'red'}}>
        {filter == 2 ? <div> 
        <MapContainer center={[markers![0].locationArr![0].lat,markers![0].locationArr![0].lon,]}zoom={10}scrollWheelZoom={false}style={{ height: "80vh" }}>
         <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
           {markers.map(x => x.locationArr![0].lat != null  &&  x.locationArr![0].lon != null   && <>
           <Marker key={x.locationArr![0].lat} position={[ x.locationArr![0].lat, x.locationArr![0].lon, ]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></> )} 
         </MapContainer> 
        </div> :
      filter == 2.1 &&   <div> 
      <MapContainer center={[markers![0].locationArr![0].lat,markers![0].locationArr![0].lon,]}zoom={10}scrollWheelZoom={false}style={{ height: "80vh" }}>
       <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
         {markers.map(x => x.locationArr![0].lat != null  &&  x.locationArr![0].lon != null   && <>
         <Marker key={x.locationArr![0].lon} position={[ x.locationArr![0].lat, x.locationArr![0].lon, ]}><Popup> region:{x.region} <br></br> city:{x.city}  <br></br>country:{x.country}  <br></br> numCasualties:{x.numCasualties}</Popup></Marker></> )} 
       </MapContainer> 
      </div>
         } 
    </div>
}
    </>
  )
}