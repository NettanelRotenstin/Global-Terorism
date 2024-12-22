import React, { useState } from 'react'
import { socket } from './main'
 import IPropsForMarkers from './Types/interfaces/IPropsForMarker';
 import { query1, query10, query11, query12, query13, query14, query2, query3, query4, query5, query6, query7, query8, query9 } from '../src/Utils/queriesList'
import IQuery from './Types/interfaces/IQuery';


export default function App() {
  const [filter, setFilter] = React.useState<number>(0);
  const [queries, setqueries] = useState<IQuery[]>([query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13, query14])
  const [markers, setmarkers] = useState<IPropsForMarkers[]>()

  socket.on('kind-attacks', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery:IPropsForMarkers|null = {attackType:element.attackType,numCasualties:element.numCasualties}
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('all-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = {region:element.region,numCasualties:avarage,country:element.country,city:element.city,locationArr:element.locationArr}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('region-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = {region:element.region,numCasualties:avarage,country:element.country,city:element.city,locationArr:element.locationArr}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('country-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = {region:element.region,numCasualties:avarage,country:element.country,city:element.city,locationArr:element.locationArr}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  return (
    <div>
      App
    </div>
  )
}
