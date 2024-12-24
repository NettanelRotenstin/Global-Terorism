import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { socket } from '../main';
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker';
import IQuery from '../Types/interfaces/IQuery';
import '../components/select.css'
interface Props {
  markers: IPropsForMarkers[]
  setmarkers: any
  filter: number
  setFilter: any
  queries: IQuery[]
  setqueries: Dispatch<SetStateAction<IQuery[]>>

}


export default function Select({ markers, setmarkers, filter, setFilter, queries }: Props) {
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
    if (filter == 1)
      socket.emit('kind-attacks',)

    if (filter == 2)
      socket.emit('all-most-hurts',)

    if (filter == 2.1)
    {
      setareaBool(true)
      setcountryBool(false)
      setcityBool(false)
      setyearBool(false)
      setyear2Bool(false)
      setyearstartBool(false)
      setyearendBool(false)
      setregionBool(false)
      setorganameBool(false)
      setorganame2Bool(false)
    }
    if (filter == 2.2)
    {
      setareaBool(false)
      setcountryBool(true)
      setcityBool(false)
      setyearBool(false)
      setyear2Bool(false)
      setyearstartBool(false)
      setyearendBool(false)
      setregionBool(false)
      setorganameBool(false)
      setorganame2Bool(false)
    }
    if(filter == 2.3){
      setareaBool(false)
      setcountryBool(false)
      setcityBool(true)
      setyearBool(false)
      setyear2Bool(false)
      setyearstartBool(false)
      setyearendBool(false)
      setregionBool(false)
      setorganameBool(false)
      setorganame2Bool(false)
    }
    if (filter == 3)
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(true)
        setyear2Bool(false)
        setyearstartBool(false)
        setyearendBool(false)
        setregionBool(false)
        setorganameBool(false)
        setorganame2Bool(false)
      }

    if (filter == 3.1)
    {
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(false)
        setyear2Bool(false)
        setyearstartBool(true)
        setyearendBool(true)
        setregionBool(false)
        setorganameBool(false)
        setorganame2Bool(false)
      }
    }
    if (filter == 3.2)
      console.log(999)
      socket.emit('5year-trend',)

    if (filter == 3.3)
      socket.emit('10year-trend',)

    if (filter == 4)
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(false)
        setyear2Bool(false)
        setyearstartBool(false)
        setyearendBool(false)
        setregionBool(true)
        setorganameBool(false)
        setorganame2Bool(false)
      }

    if (filter == 4.1)
      socket.emit('all-region-topFive',)

    if (filter == 5)
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(false)
        setyear2Bool(true)
        setyearstartBool(false)
        setyearendBool(false)
        setregionBool(false)
        setorganameBool(false)
        setorganame2Bool(false)
      }

    if (filter == 5.1)
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(false)
        setyear2Bool(false)
        setyearstartBool(false)
        setyearendBool(false)
        setregionBool(false)
        setorganameBool(true)
        setorganame2Bool(false)
      }
    if (filter == 6)
      {
        setareaBool(false)
        setcountryBool(false)
        setcityBool(false)
        setyearBool(false)
        setyear2Bool(false)
        setyearstartBool(false)
        setyearendBool(false)
        setregionBool(false)
        setorganameBool(false)
        setorganame2Bool(true)
      }

  }, [filter])

  const sendEmitArea = () => {
    console.log(99)
    socket.emit('region-most-hurts', area)
    setareaBool(false)
  }

  const sendEmitCountry = () => {
    socket.emit('country-most-hurts', country)
    setcountryBool(false)
  }

  const sendEmitCity = () => {
    socket.emit('city-most-hurts', city)
    setcityBool(false)
  }

  const sendEmitYear = () => {
    socket.emit('year-trend', year)
    setyearBool(false)
  }

  const sendEmitRangeYear = () => {
    socket.emit('year-range-trend', yearstart, yearend)
    setyearstartBool(false)
    setyearendBool(false)
  }

  const sendEmitRegionTop5 = () => {
    socket.emit('region-topFive',region)
    setregionBool(false)
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
    <div className='slct-all'>
      <select className='slct' onChange={(e) => setFilter(Number(e.target.value))}>
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
      {areaBool ? <input placeholder='enter region1:' onChange={(e) => setarea(e.target.value)}></input> : ""}
      {areaBool ? <button onClick={sendEmitArea }>send query </button> : ""}
      {countryBool ? <input placeholder='enter country:' onChange={(e) => setcountry(e.target.value as string)}></input> : ""}
      {countryBool ? <button onClick={sendEmitCountry}>send query </button> : ""}
      {cityBool ? <input placeholder='enter city:' onChange={(e) => setcity(e.target.value)}></input> : ""}
      {cityBool ? <button onClick={sendEmitCity}>send query</button> : ""}
      {yearBool ? <input placeholder='enter year (1971-2017):' onChange={(e) => setyear(e.target.value as unknown as number)}></input> : ""}
      {yearBool ? <button onClick={sendEmitYear}>send query</button> : ""}
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
      </div>
    </>
     
  );
}