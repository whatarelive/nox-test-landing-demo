'use client';

import { Line } from "react-chartjs-2";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { generateDataGraph, generateDataLabel } from "@/lib/util/util";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
} from "chart.js";

// ChartJs Config
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
)

const data = {
    labels: generateDataLabel(['2023', '2024']),
    datasets: [
        {
            label: 'Dataset 1',
            data: generateDataGraph(24),
            borderColor: '#6366F1',
            backgroundColor: 'transparent',
        },
        {
            label: 'Dataset 2',
            data: generateDataGraph(24),
            borderColor: '#A5B4FC',
            backgroundColor: 'transparent',
        },
    ],
}

export function GraphTable() {
    // Using useBreakpointValue to resize the chart based on the breakpoint
    const chartHeight = useBreakpointValue({ sm: '200px', md: '300px', lg: '300px' });
    const chartWidth = useBreakpointValue({ sm: '360px', md: '600px', lg: '500px' });

    return (
        <Box width={chartWidth} height={chartHeight}>
            <Line data={data} options={{
                responsive: true,
                maintainAspectRatio: true,
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