
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

  useEffect(() => {
    if (filter == 1)
      socket.emit('kind-attacks',)
    if(filter == 2)
      socket.emit('all-most-hurts',)
  }, [filter])

 

  useEffect(() => {
  }, 
  [markers])

  socket.on('kind-attacks', (data) => {
    setMarkers(data)
  })
  return (
    <>
      <select onChange={(e) => setFilter(e.target.value as any)}>
        <option selected value={1}>{queries[0].sentence}</option>
        <option value={queries[1].value}>{queries[1].sentence}</option>
        <option value={queries[5].value}>{queries[5].sentence}</option>
        <option value={queries[9].value}>{queries[9].sentence}</option>
        <option value={queries[11].value}>{queries[11].sentence}</option>
        <option value={queries[13].value}>{queries[13].sentence}</option>
      </select>
      { }
    </>
  );
}