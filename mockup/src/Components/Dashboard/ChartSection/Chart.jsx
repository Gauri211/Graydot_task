import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '20', K52500: 4000, K73500: 2400, K244313: 2400 },
  { name: '', K52500: 3000, K73500: 1398, K244313: 2210 },
  { name: '25', K52500: 2000, K73500: 9800, K244313: 2290 },
  { name: '', K52500: 2780, K73500: 3908, K244313: 2000 },
  { name: '30', K52500: 1890, K73500: 4800, K244313: 2181 },
  { name: '', K52500: 2390, K73500: 3800, K244313: 2500 },
  { name: '35', K52500: 3490, K73500: 4300, K244313: 2100 },
  { name: '', K52500: 2780, K73500: 3908, K244313: 2000 },
  { name: '40', K52500: 1890, K73500: 4800, K244313: 2181 },
  { name: '', K52500: 2390, K73500: 3800, K244313: 2500 },
  { name: '60', K52500: 3490, K73500: 4300, K244313: 2100 },
  { name: '', K52500: 2390, K73500: 3800, K244313: 2500 },
  { name: '65', K52500: 3490, K73500: 4300, K244313: 2100 },
  { name: '70', K52500: 5000, K73500: 6000, K244313: 3000 },
];

const Chart = () => {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="K73500" stackId="a" fill="#002366" />
          <Bar dataKey="K52500" stackId="a" fill="#3f00ff" />
          <Bar dataKey="K244313" stackId="a" fill="#99badd" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default Chart;
