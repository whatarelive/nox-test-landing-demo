'use client'

import React from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
)

function generateDataGraph({ cant }: { cant: number }): number[] {
    const data: number[] = [];

    for (let i=0; i<= cant; i++) {
        const value = Math.random() * (i + 1);

        data.push(value);
    }

    return data;
}

function generateDataLabel({ years }: { years: string[] }): string[] {
    const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labels: string[] = [];


    for (let i=0; i <= years.length - 1; i++) {
        for (let j = 0; j <= months.length - 1; j++) {
            labels.push(`${months[j]}-${years[i]}`);
        }
    }

    return labels;
}

const data = {
    labels: generateDataLabel({ years: ['2023', '2024'] }),
    datasets: [
        {
            label: 'Dataset 1',
            data: generateDataGraph({ cant: 24 }),
            borderColor: '#6366F1',
            backgroundColor: 'transparent',
        },
        {
            label: 'Dataset 2',
            data: generateDataGraph({ cant: 24 }),
            borderColor: '#A5B4FC',
            backgroundColor: 'transparent',
        },
    ],
}

export function GraphTable() {
    // Uso de useBreakpointValue para ajustar el tamaño del gráfico según el breakpoint
    const chartHeight = useBreakpointValue({ base: '200px', md: '300px', lg: '277px' })
    const chartWidth = useBreakpointValue({ base: '400px', md: '600px', lg: '608px' })

    return (
        <Box minWidth={chartWidth} height={chartHeight}>
            <Line data={data} options={{
                responsive: true,

                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
                elements: {
                    line: {
                        spanGaps: 10,
                        tension: 0,
                    },
                    point: {
                        borderWidth: 2.5,
                        radius: 7.5,
                    },
                },
            }} />
        </Box>
    )
}