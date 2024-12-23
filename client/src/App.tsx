import React, { useEffect, useState } from 'react'
import { socket } from './main'
import IPropsForMarkers from './Types/interfaces/IPropsForMarker';
import { query1, query10, query11, query12, query13, query14, query2, query3, query4, query5, query6, query7, query8, query9 } from '../src/Utils/queriesList'
import IQuery from './Types/interfaces/IQuery';
import Graph from './components/Chart';
import Select from './components/Select';
import Map from './components/maps/Map';

export default function App() {
  const [filter, setFilter] = React.useState<number>(100)
  const [queries, setqueries] = useState<IQuery[]>([query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13, query14])
  const [markers, setmarkers] = useState<IPropsForMarkers[]>()
  const [topFive, setTopFive] = useState<IPropsForMarkers[]>()
  const [sixth, setSixth] = useState<IPropsForMarkers[]>()

  useEffect(() => {
    console.log("Markers: ", markers);
  }, [markers])

  socket.on('kind-attacks', async (data) => {
    await setmarkers(data)
  })

  socket.on('all-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = { region: element.region, numCasualties: avarage, country: element.country, city: element.city, locationArr: element.locationArr }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('region-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = { region: element.region, numCasualties: avarage, country: element.country, city: element.city, locationArr: element.locationArr }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('country-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = { region: element.region, numCasualties: avarage, country: element.country, city: element.city, locationArr: element.locationArr }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('city-most-hurts', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const avarage = element.numCasualties as number / element.locationArr!.length as number
      const dataNaccessery = { region: element.region, numCasualties: avarage, country: element.country, city: element.city, locationArr: element.locationArr }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { year: element.year, month: element.month, numEvent: element.numEvent }
      list.push(dataNaccessery)
    }
    setmarkers(list)
    console.log(markers)
  })

  socket.on('year-range-trend', (data) => {
    const list = []
    for (const element1 of data as IPropsForMarkers[]) {
      for (const element of element1 as IPropsForMarkers[]) {
        const dataNaccessery = { year: element.year, month: element.month, numEvent: element.numEvent }
        list.push(dataNaccessery)
      }

    }
    setmarkers(list)
  })

  socket.on('5year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { year: element.year, month: element.month, numEvent: element.numEvent }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('10year-trend', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { year: element.year, month: element.month, numEvent: element.numEvent }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('region-topFive', (data) => {
    setTopFive(data)
    setmarkers(data)
  })

  socket.on('all-region-topFive', (data) => {
    setTopFive(data)
    setmarkers(data)
  })

  socket.on('events-year', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { organizationName: element.organizationName, numEvent: element.numEvent, year: element.year }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('org-event', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { organizationName: element.organizationName, numEvent: element.numEvent, year: element.year }
      list.push(dataNaccessery)
    }
    setmarkers(list)
  })

  socket.on('org-most-events-area', (data) => {
    setSixth(data)
    setmarkers(data)
  })
  return (
    <>
      <Select markers={markers!} setmarkers={setmarkers} filter={filter} setFilter={setFilter} queries={queries} setqueries={setqueries} />


      <Map
        markers={markers!}
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
    </>
  )
}
