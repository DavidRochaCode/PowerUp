/* eslint-disable no-undef */
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Dataset',
        },
    },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'April', 'Maio', 'Junho', 'Julho'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Peso',
            data: labels.map((() => Math.floor(Math.random() * 100))),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'red',
            borderWidth: 1
        },
        
    ],
};

const BarChart = () => {
    return <Bar options={options} data={data} />;
}

export default BarChart;