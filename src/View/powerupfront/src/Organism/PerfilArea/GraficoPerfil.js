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
import { useEffect, useState } from "react";
import axios from "axios";
import response from "react";

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



const labels = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Peso',
            data: [1,2,3,4,5,6,7],
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