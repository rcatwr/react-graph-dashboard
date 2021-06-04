import React, { Component, createRef } from 'react';
import Chart from 'chart.js';
import { findAllByTitle } from '@testing-library/react';


class LineChart2 extends Component {
    constructor(){
        super();
        this.chartRef = React.createRef();
        
    }
   componentDidUpdate() {
       const {data} = this.props;
       this.myChart.data.labels = data.map(d => d.time);
       this.myChart.data.datasets[0].data = data.map(d => d.unshaved)
       this.myChart.data.datasets[1].data = data.map(d => d.target)
       this.myChart.update();
   }

    componentDidMount() {
        const {data, timescale, title1, title2, color1, color2} = this.props;
       
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
                                unit: timescale,
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
                    label: title1,
                    data: data.map(d=> d.unshaved),
                    fill: 'none',
                    backgroundColor: color1,
                    pointRadius: 2,
                    borderColor: color1,
                    borderWidth: 1,
                    lineTension: 0
                }, {
                    label: title2,
                    data: data.map(d=> d.target),
                    fill: 'none',
                    backgroundColor: color2,
                    pointRadius: 2,
                    borderColor: color2,
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

export default LineChart2;
