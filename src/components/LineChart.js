import React, { Component, createRef } from 'react';
import Chart from 'chart.js';
import { findAllByTitle } from '@testing-library/react';


class LineChart extends Component {
    constructor(){
        super();
        this.chartRef = React.createRef();
        
    }
   componentDidUpdate() {
       const {data} = this.props;
       this.myChart.data.labels = data.map(d => d.time);
       this.myChart.data.datasets[0].data = data.map(d => d.value)
       this.myChart.update();
   }

    componentDidMount() {
        const {data, title, color} = this.props;
       
        this.myChart = new Chart(this.chartRef.current,{
            type: 'line',
            options: {
                legend:{
                    labels:{
                        fontColor:'white'
                    }
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {   gridLines:{
                            color:'rgba(255,255,255, 0.1)'
                          },
                            type: 'time',
                            time: {
                                unit: 'week'
                            }
                        }
                    ],
                    yAxes: [
                        {gridLines:{
                            color:'rgba(255,255,255, 0.1)'
                          },
                            ticks: {
                                min: 0
                            }
                        }
                    ]
                }
            },
            data: {
                labels: data.map(d=> d.time),
                datasets: [{
                    label: title,
                    data: data.map(d=> d.value),
                    fill: 'none',
                    backgroundColor: color,
                    pointRadius: 2,
                    borderColor: color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        })
    }

    render() {
        return <canvas ref={this.chartRef} />
    }



}

export default LineChart;