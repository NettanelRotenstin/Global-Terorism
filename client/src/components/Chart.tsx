import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
 
interface Props {
    data: any[]
    xKey: string
    bars: { key: string; color: string; name: string }[]
}

const Graph: React.FC<Props> = ({ data, xKey, bars }: Props) => {
    return (
        <ResponsiveContainer width="80%" height={500} style={{top:1000}}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="4 4 " />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {bars.map((bar) => (
                    <Bar
                         key={bar.key}
                        dataKey={bar.key}
                        fill={bar.color}
                        name={bar.name}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    )
}


export default Graph