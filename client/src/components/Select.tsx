import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { socket } from '../main';
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker';
import IQuery from '../Types/interfaces/IQuery';
interface Props {
  markers: IPropsForMarkers[]
  setmarkers: any
  filter: number
  setfilter: any
  queries: IQuery[]
  setqueries: Dispatch<SetStateAction<IQuery[]>>

}


export default function Select({ markers, setmarkers, filter, setfilter, queries }: Props) {
  const [areaBool, setareaBool] = useState(false)
  const [area, setarea] = useState("")
  const [countryBool, setcountryBool] = useState(false)
  const [country, setcountry] = useState("")
  const [cityBool, setcityBool] = useState(false)
  const [city, setcity] = useState("")
  const [yearBool, setyearBool] = useState(false)
  const [year, setyear] = useState(0)
  const [yearstartBool, setyearstartBool] = useState(false)
  const [yearstart, setyearstart] = useState(1971)
  const [yearendBool, setyearendBool] = useState(false)
  const [yearend, setyearend] = useState(2017)
  const [regionBool, setregionBool] = useState(false)
  const [region, setregion] = useState('')
  const [year2Bool, setyear2Bool] = useState(false)
  const [year2, setyear2] = useState(1970)
  const [organameBool, setorganameBool] = useState(false)
  const [organame, setorganame] = useState('')
  const [organame2Bool, setorganame2Bool] = useState(false)
  const [organame2, setorganame2] = useState('')

  useEffect(() => {
    console.log(22)
    if (filter == 1)
      socket.emit('kind-attacks',)

    if (filter == 2)
      socket.emit('all-most-hurts',)

    if (filter == 2.1)
      setareaBool(true)

    if (filter == 2.2)
      setcountryBool(true)

    if (filter == 3)
      setyearBool(true)

    if (filter == 3.1)
      setyearstartBool(true)
    setyearendBool(true)

    if (filter == 3.2)
      socket.emit('5year-trend',)

    if (filter == 3.3)
      socket.emit('10year-trend',)

    if (filter == 4)
      socket.emit('region-topFive', region)
    setregionBool(false)

    if (filter == 4.1)
      socket.emit('all-region-topFive',)

    if (filter == 5)
      setyear2Bool(true)

    if (filter == 5.1)
      setorganameBool(true)

    if (filter == 6)
      setorganame2Bool(true)

  }, [filter])

  const sendEmitArea = () => {
    socket.emit('region-most-hurts', area)
    console.log("object")
    setareaBool(false)
  }

  const sendEmitCountry = () => {
    console.log(14)
    socket.emit('country-most-hurts', country)
    setcountryBool(false)
  }

  const sendEmitCity = () => {
    socket.emit('city-most-hurts', city)
    setcityBool(false)
  }

  const sendEmitYear = () => {
    console.log(23)
    socket.emit('year-trend', year)
    setyearBool(false)
  }

  const sendEmitRangeYear = () => {
    socket.emit('year-range-trend', yearstart, yearend)
    console.log(yearstart,yearend)
    setyearstartBool(false)
    setyearendBool(false)
  }

  const sendEmitRegionTop5 = () => {
    socket.emit('year-range-trend', yearstart, yearend)
    setyearstartBool(false)
    setyearendBool(false)
  }

  const sendEmitYear5 = () => {
    socket.emit('events-year', year2)
    setyear2Bool(false)
  }

  const sendEmitOrganame = () => {
    socket.emit('org-event', organame)
    setorganameBool(false)
  }
  const sendEmitOrganame2 = () => {
    socket.emit('org-most-events-area', organame2)
    setorganame2Bool(false)
  }

  useEffect(() => {
  },
    [markers])


  return (
    <>
      <select onChange={(e) => setfilter(Number(e.target.value))}>
      <option value={2}>Choose one</option>
        <option value={queries[0].value}>{queries[0].sentence}</option>
        <option value={queries[1].value}>{queries[1].sentence}</option>
        <option value={queries[2].value}>{queries[2].sentence}</option>
        <option value={queries[3].value}>{queries[3].sentence}</option>
        <option value={queries[4].value}>{queries[4].sentence}</option>
        <option value={queries[5].value}>{queries[5].sentence}</option>
        <option value={queries[6].value}>{queries[6].sentence}</option>
        <option value={queries[7].value}>{queries[7].sentence}</option>
        <option value={queries[8].value}>{queries[8].sentence}</option>
        <option value={queries[9].value}>{queries[9].sentence}</option>
        <option value={queries[10].value}>{queries[10].sentence}</option>
        <option value={queries[11].value}>{queries[11].sentence}</option>
        <option value={queries[12].value}>{queries[12].sentence}</option>
        <option value={queries[13].value}>{queries[13].sentence}</option>
      </select>
      {areaBool ? <input placeholder='enter region:' onChange={(e) => setarea(e.target.value)}></input> : ""}
      {areaBool ? <button onClick={() => { sendEmitArea }}>send query </button> : ""}
      {countryBool ? <input placeholder='enter country:' onChange={(e) => setcountry(e.target.value as string)}></input> : ""}
      {countryBool ? <button onClick={sendEmitCountry}>send query 2</button> : ""}
      {cityBool ? <input placeholder='enter city:' onChange={(e) => setcity(e.target.value)}></input> : ""}
      {cityBool ? <button onClick={sendEmitCity}>send query</button> : ""}
      {yearBool ? <input placeholder='enter year (1971-2017):' onChange={(e) => setyear(e.target.value as unknown as number)}></input> : ""}
      {yearBool ? <button onClick={sendEmitYear}>send query3</button> : ""}
      {yearstartBool ? <input placeholder='enter start year (1971-2017):' onChange={(e) => setyearstart(e.target.value as unknown as number)}></input> : ""}
      {yearendBool ? <input placeholder='enter end year (1971-2017):' onChange={(e) => setyearend(e.target.value as unknown as number)}></input> : ""}
      {yearendBool ? <button onClick={sendEmitRangeYear}>send query</button> : ""}
      {regionBool ? <input placeholder='enter region:' onChange={(e) => setregion(e.target.value)}></input> : ""}
      {regionBool ? <button onClick={sendEmitRegionTop5}>send query</button> : ""}
      {year2Bool ? <input placeholder='enter year (1971 - 2017):' onChange={(e) => setyear2(e.target.value as unknown as number)}></input> : ""}
      {year2Bool ? <button onClick={sendEmitYear5}>send query</button> : ""}
      {organameBool ? <input placeholder='enter organization name:' onChange={(e) => setorganame(e.target.value)}></input> : ""}
      {organameBool ? <button onClick={sendEmitOrganame}>send query</button> : ""}
      {organame2Bool ? <input placeholder='enter organization name:' onChange={(e) => setorganame2(e.target.value)}></input> : ""}
      {organame2Bool ? <button onClick={sendEmitOrganame2}>send query</button> : ""}
    </>
  );
}