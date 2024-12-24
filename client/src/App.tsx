import React, { useEffect, useState } from 'react'
import { socket } from './main'
import IPropsForMarkers from './Types/interfaces/IPropsForMarker';
import { query1, query10, query11, query12, query13, query14, query2, query3, query4, query5, query6, query7, query8, query9 } from '../src/Utils/queriesList'
import IQuery from './Types/interfaces/IQuery';
import Graph from './components/Chart';
import Select from './components/Select';
import Map from './components/maps/Map';
import Nav from './components/Nav';
import DisplayPage from './components/DisplayPage';
import './App.css'

export default function App() {
  const [filter, setFilter] = React.useState<number>(100)
  const [queries, setqueries] = useState<IQuery[]>([query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13, query14])
  const [markers, setmarkers] = useState<IPropsForMarkers[]>()
  const [topFive, setTopFive] = useState<IPropsForMarkers[]>()
  const [sixth, setSixth] = useState<IPropsForMarkers[]>()
  const [firstq, setfirstq] = useState<IPropsForMarkers[]>()
  const [thirdq, setthirdq] = useState<IPropsForMarkers[]>()
  const [fourth, setfourth] = useState<IPropsForMarkers[]>()
  const [fifth, setfifth] = useState<IPropsForMarkers[]>()
  const [searchBool, setsearchBool] = useState<boolean>(false)
  const [searchData, setsearchData] = useState<IPropsForMarkers[]>()
  const [thirdRange, setthirdRange] = useState<IPropsForMarkers[]>()
  const [create, setcreate] = useState(false)
  useEffect(() => {
  }, [markers])

  socket.on('kind-attacks', async (data) => {
    await setfirstq(data)
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

  socket.on('search', (data) => { 
     setsearchBool(true)
     setsearchData(data)
 
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
    setthirdq(list)
  })

  socket.on('year-range-trend', (data) => {
    const list = []
    for (const element1 of data as IPropsForMarkers[][]) {
      const data = { year: element1[0].year, numEvent: 0 }
      for (const element of element1 as IPropsForMarkers[]) {
        data.numEvent += element.numEvent!
      }
      list.push(data)
    }
    setthirdRange(list)
  })

  socket.on('5year-trend', (data) => {
    const list = []
    for (const element1 of data as IPropsForMarkers[][]) {
      const data = { year: element1[0].year, numEvent: 0 }
      for (const element of element1 as IPropsForMarkers[]) {
        data.numEvent += element.numEvent!
      }
      list.push(data)
    }
    setthirdq(list)
  })

  socket.on('10year-trend', (data) => {
    const list = []
    for (const element1 of data as IPropsForMarkers[][]) {
      const data = { year: element1[0].year, numEvent: 0 }
      for (const element of element1 as IPropsForMarkers[]) {
        data.numEvent += element.numEvent!
      }
      list.push(data)
    }
    setthirdq(list)
  })

  socket.on('region-topFive', (data) => {
    setTopFive(data)
    setmarkers(data)
  })

  socket.on('region-topFive', (data) => {
    setfourth(data[0].organizeTopFive)
  })

  socket.on('all-region-topFive', (data) => {
    setTopFive(data)
    setmarkers(data)
  })

  socket.on('all-region-topFive', (data) => {
    const list = []
     for (const element1 of data as any[]) {
      for (const element of element1.organizeTopFive) {
        list.push(element)
      }
      }
     setfourth(list)
   
  })

  socket.on('events-year', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { organizationName: element.organizationName, numEvent: element.numEvent, year: element.year }
      list.push(dataNaccessery)
    }
    setfifth(list)
  })

  socket.on('org-event', (data) => {
    const list = []
    for (const element of data as IPropsForMarkers[]) {
      const dataNaccessery = { organizationName: element.organizationName, numEvent: element.numEvent, year: element.year }
      list.push(dataNaccessery)
    }
    setfifth(list)
  })

  socket.on('org-most-events-area', (data) => {
    setSixth(data)
    setmarkers(data)
  })
  return (
    <>
      <Select markers={markers!} setmarkers={setmarkers} filter={filter} setFilter={setFilter} queries={queries} setqueries={setqueries} />
      <DisplayPage thirdRange={thirdRange!} searchData={searchData!} fifth={fifth!} setthirdq={setthirdq} thirdq={thirdq!} firstq={firstq!} markers={markers!} setmarkers={setmarkers} filter={filter} setFilter={setFilter} queries={queries} setqueries={setqueries} topFive={topFive!} setTopFive={setTopFive} sixth={sixth!} setSixth={setSixth} fourth={fourth!} searchBool={searchBool} setsearchBool={setsearchBool} create={create} setcreate={setcreate}/>
    </>
  )
}
