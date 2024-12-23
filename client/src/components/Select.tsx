import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { socket } from '../main';
import IQuery from '../Types/interfaces/IQuery';
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker';

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
      setareaBool(true)

    if (filter == 2.2)
      setcountryBool(true)
    if (filter == 2.3) {
      setcityBool(true)
    }
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
      setregionBool(true)

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
    socket.emit('region-topFive', region)
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
      <select onChange={(e) => setFilter(e.target.value as any)}>
        {/* {1 all attack type} */}
        <option value={queries[0].value}>{queries[0].sentence}</option>
        {/* {2  all-most-hurts  } */}
        <option value={queries[1].value}>{queries[1].sentence}</option>
        {/* {2.1  all-most-hurts-area                setareaBool } */}
        <option value={queries[2].value}>{queries[2].sentence}</option>
        {/* {2.2  all-most-hurts-country                setcountryBool } */}
        <option value={queries[3].value}>{queries[3].sentence}</option>
        {/* {2.3  all-most-hurts-city                setcityBool } */}
        <option value={queries[4].value}>{queries[4].sentence}</option>
        {/* {3  trend-year                          setyearBool } */}
        <option value={queries[5].value}>{queries[5].sentence}</option>
        {/* {3.1  trend-year-range     setyearstartBool(true) setyearendBool(true) } */}
        <option value={queries[6].value}>{queries[6].sentence}</option>
        {/* {3.2  5year-trend  } */}
        <option value={queries[7].value}>{queries[7].sentence}</option>
        {/* {3.3  10year-trend  } */}
        <option value={queries[8].value}>{queries[8].sentence}</option>
        {/* {4 The five most prominent terrorist organizations in a certain region   setregionBool } */}
        <option value={queries[9].value}>{queries[9].sentence}</option>
        {/* {4.1 all-top-five    } */}
        <option value={queries[10].value}>{queries[10].sentence}</option>
        {/* {5 Organizations that operated in a certain year with total incidents  setyear2Bool} */}
        <option value={queries[11].value}>{queries[11].sentence}</option>
        {/* {5.1 Organizations that operated in a certain year with total incidents (by organization name)   setorganameBool} */}
        <option value={queries[12].value}>{queries[12].sentence}</option>
        {/* {6  Areas where certain organizations have carried out the deadliest attacks (by organization name)  setorganame2Bool} */}
        <option value={queries[13].value}>{queries[13].sentence}</option>
      </select>
      {areaBool ? <input placeholder='enter region:' onChange={(e) => setarea(e.target.value)}></input> : 1}
      {areaBool ? <button onClick={sendEmitArea}>send query 1</button> : 1}
      {countryBool ? <input placeholder='enter country:' onChange={(e) => setcountry(e.target.value)}></input> : 1}
      {countryBool ? <button onClick={sendEmitCountry}>send query</button> : 1}
      {cityBool ? <input placeholder='enter vity:' onChange={(e) => setcity(e.target.value)}></input> : 1}
      {cityBool ? <button onClick={sendEmitCity}>send query</button> : 1}
      {yearBool ? <input placeholder='enter year (1971-2017):' onChange={(e) => setyear(e.target.value as unknown as number)}></input> : 1}
      {yearBool ? <button onClick={sendEmitYear}>send query</button> : 1}
      {yearstartBool ? <input placeholder='enter start year (1971-2017):' onChange={(e) => setyearstart(e.target.value as unknown as number)}></input> : 1}
      {yearendBool ? <input placeholder='enter end year (1971-2017):' onChange={(e) => setyearend(e.target.value as unknown as number)}></input> : 1}
      {yearendBool ? <button onClick={sendEmitRangeYear}>send query</button> : 1}
      {regionBool ? <input placeholder='enter region:' onChange={(e) => setregion(e.target.value)}></input> : 1}
      {regionBool ? <button onClick={sendEmitRegionTop5}>send query</button> : 1}
      {year2Bool ? <input placeholder='enter year (1971 - 2017):' onChange={(e) => setyear2(e.target.value as unknown as number)}></input> : 1}
      {year2Bool ? <button onClick={sendEmitYear5}>send query</button> : 1}
      {organameBool ? <input placeholder='enter organization name:' onChange={(e) => setorganame(e.target.value)}></input> : 1}
      {organameBool ? <button onClick={sendEmitOrganame}>send query</button> : 1}
      {organame2Bool ? <input placeholder='enter organization name:' onChange={(e) => setorganame2(e.target.value)}></input> : 1}
      {organame2Bool ? <button onClick={sendEmitOrganame2}>send query</button> : 1}
    </>
  );
}