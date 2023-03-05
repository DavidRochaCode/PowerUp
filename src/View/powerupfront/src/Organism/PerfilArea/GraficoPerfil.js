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



export function BarChart({peso}){

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
    
    
    
    const labels = ["70","80","90","120"];
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Peso',
                data: [10,20,30,40,50,60,70,80,90,110,110,120,130,140,150,160,170,180,190,200],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'red',
                borderWidth: 1
            },
            
        ],
    };


    return <Bar options={options} data={data}/>;
}

