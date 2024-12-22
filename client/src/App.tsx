import React, { useState } from 'react'
import { socket } from './main'
 import IPropsForMarkers from './Types/interfaces/IPropsForMarker';

export default function App() {
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
  
  return (
    <div>
      App
    </div>
  )
}
