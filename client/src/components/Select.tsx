
import React, { useEffect, useState } from 'react';
import IQuery from '../Types/interfaces/IQuery';
import { query1, query10, query11, query12, query13, query14, query2, query3, query4, query5, query6, query7, query8, query9 } from '../Utils/queriesList'
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker';
import { io, Socket } from 'socket.io-client';
import { socket } from '../main';
interface Props {
  markers: IPropsForMarkers[]
  setMarkers: any
}

export default function Select({ markers, setMarkers }: Props) {
  const [filter, setFilter] = React.useState<number>(0);
  const [queries, setqueries] = useState<IQuery[]>([query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13, query14])
  const [areaBool, setareaBool] = useState(false)
  const [area, setarea] = useState("")
  useEffect(() => {
    if (filter == 1)
      socket.emit('kind-attacks',)

    if (filter == 2)
      socket.emit('all-most-hurts',)

    if (filter == 2.1)
      setareaBool(true)
      socket.emit('region-most-hurts',area)
  }, [filter])



  useEffect(() => {
  },
    [markers])


  return (
    <>
      <select onChange={(e) => setFilter(e.target.value as any)}>
        <option selected value={queries[0].value}>{queries[0].sentence}</option>
        <option value={queries[1].value}>{queries[1].sentence}</option>
        <option value={queries[2].value}>{queries[2].sentence}</option>
        <option value={queries[5].value}>{queries[5].sentence}</option>
        <option value={queries[9].value}>{queries[9].sentence}</option>
        <option value={queries[11].value}>{queries[11].sentence}</option>
        <option value={queries[13].value}>{queries[13].sentence}</option>
      </select>
      {areaBool ? <input placeholder='enter region:' onChange={(e) => setarea(e.target.value)}></input> : 1}

    </>
  );
}
// export const query1:IQuery = {sentence:'The most deadly types of attacks',value:1}///
// export const query2:IQuery = {sentence:'Areas with the highest casualty rate per incident',value:2}///
// export const query3:IQuery = {sentence:'Areas with the highest casualty rate per incident (by area)',value:2.1}
// export const query4:IQuery = {sentence:'Areas with the highest casualty rate per incident (by country)',value:2.2}
// export const query5:IQuery = {sentence:'Areas with the highest casualty rate per incident (by city)',value:2.3}
// export const query6:IQuery = {sentence:'Annual and monthly trends in the frequency of incidents (by year)',value:3}
// export const query7:IQuery = {sentence:'Annual and monthly trends in the frequency of incidents (by years range)',value:3.1}
// export const query8:IQuery = {sentence:'Annual and monthly trends in the frequency of incidents (by last 5 years)',value:3.2}
// export const query9:IQuery = {sentence:'Annual and monthly trends in the frequency of incidents (by last 10 years)',value:3.3}
// export const query10:IQuery = {sentence:'The five most prominent terrorist organizations in a certain region (5 orgaizations)',value:4}
// export const query11:IQuery = {sentence:'The five most prominent terrorist organizations in a certain region (all orgaizations)',value:4.1}
// export const query12:IQuery = {sentence:'Organizations that operated in a certain year with total incidents (by year)',value:5}
// export const query13:IQuery = {sentence:'Organizations that operated in a certain year with total incidents (by organization name)',value:5.1}
// export const query14:IQuery = {sentence:'Areas where certain organizations have carried out the deadliest attacks (by organization name)',value:6}