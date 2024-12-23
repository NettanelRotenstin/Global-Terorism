import React, { Dispatch, SetStateAction, useState } from 'react'
import IQuery from '../Types/interfaces/IQuery'
import IPropsForMarkers from '../Types/interfaces/IPropsForMarker'
import Select from './Select'
interface Props {
    markers: IPropsForMarkers[]
    setmarkers: any
    filter: number
    setFilter: any
    queries: IQuery[]
    setqueries: Dispatch<SetStateAction<IQuery[]>>
  
  }
export default function Nav({ markers, setmarkers, filter, setFilter, queries,setqueries }: Props) {
     
    <div>
        <>
        <Select markers={markers!} setmarkers={setmarkers} filter={filter} setFilter={setFilter} queries={queries} setqueries={setqueries}  />
        </>
    </div>
  
}
