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



export function BarChart({importData}){

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
    
    
    
    const labels = ["10","20","30","40","50","60","70","80","90","100"];
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Masc',
                data: [10,20,30,40,50,60,70],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'red',
                borderWidth: 1
            },
            {
                label: 'Femi',
                data: [10,20,30,40,50,60,70],
                backgroundColor: 'rgba(99, 255, 132, 0.5)',
                borderColor: 'green',
                borderWidth: 1
            },
        
            
        ],
    };


    return <Bar options={options} data={data}/>;
}

