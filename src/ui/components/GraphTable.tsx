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

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [200, 250, 300, 350, 400, 300, 450, 500, 650, 700,  700, 600, 800, 350],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'transparent',
        },
        {
            label: 'Dataset 2',
            data: [300, 200, 500, 400, 700, 600, 800, 350, 400, 300, 450, 500, 650, 900],
            borderColor: 'rgb(14, 165, 233)',
            backgroundColor: 'transparent',
        },
    ],
}

export function GraphTable() {
    // Uso de useBreakpointValue para ajustar el tamaño del gráfico según el breakpoint
    const chartHeight = useBreakpointValue({ base: '200px', md: '300px', lg: '400px' })
    const chartWidth = useBreakpointValue({ base: '400px', md: '600px', lg: '800px' })

    return (
        <Box width={chartWidth} height={chartHeight} mb={6}>
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