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

  socket.on('city-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = {region:element.region,numCasualties:avarage,country:element.country,city:element.city,locationArr:element.locationArr}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {year:element.year,month:element.month,numEvent:element.numEvent}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('year-range-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {year:element.year,month:element.month,numEvent:element.numEvent}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('5year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {year:element.year,month:element.month,numEvent:element.numEvent}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('10year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {year:element.year,month:element.month,numEvent:element.numEvent}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('region-topFive', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {region:element.region,organizeTopFive:element.organizeTopFive}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('all-region-topFive', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {region:element.region,organizeTopFive:element.organizeTopFive}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('events-year', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {organizationName:element.organizationName,numEvent:element.numEvent,year:element.year}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('org-event', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {organizationName:element.organizationName,numEvent:element.numEvent,year:element.year}
      list.push(dataNaccessery)
    }  
    setmarkers(list)
  })

  socket.on('org-most-events-area', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = {organizationName:element.organizationName,numEvent:element.numEvent,year:element.year}
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
