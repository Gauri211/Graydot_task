// export default PieChartComponent;
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box } from '@chakra-ui/react';

const pieChartData = [
    { name: 'Communication', value: 15 },
    { name: 'File Management', value: 20 },
    { name: 'Productivity', value: 30 },
    { name: 'Other', value: 10 },
    { name: 'Design', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FFBB68', '#ca65ca']; // Define colors for the pie slices

const PieChartComponent = () => {
    return (
        <Box width="80%" mt={8}>
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={pieChartData}
                    cx={200}
                    cy={150}
                    outerRadius={80}
                    innerRadius={60} // Add an inner radius to create a donut chart
                    fill="#8884d8"
                    label
                >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                {/* <Legend layout="vertical" align="right" verticalAlign="middle" margin={{ left: 20, top: 10, bottom: 10, right: 0 }} /> */}
            </PieChart>
        </Box>
    );
};

export default PieChartComponent;
