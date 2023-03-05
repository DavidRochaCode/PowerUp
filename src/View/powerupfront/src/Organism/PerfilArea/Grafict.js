import React from 'react';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, ToolTip, Legend } from 'chart.js'
import {Bar} from 'react-chartjs-2'


export function Grafict(){

    const data = {
        labels : ["1","2","3"],
        datasets : [
            {
                label: "369",
                data:[4,5,6],
                backgroundColor : "aqua",
                borderColor: "black",
                borderWidth:1,
            }
        ]
    }

    const options = {}

    return(
        <div>
            <h1>Tabela</h1>
            <Bar options={options} data={data} />
        </div>
    )
}