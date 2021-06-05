import React, { Component, createRef } from 'react';
import Chart from 'chart.js';


class LineChart3 extends Component {
    constructor(){
        super();
        this.chartRef = React.createRef();
        
    }
   componentDidUpdate() {
       const {data} = this.props;
       this.myChart.data.labels = data.map(d => d.time);
       this.myChart.data.datasets[0].data = data.map(d => d.demand)
       this.myChart.data.datasets[1].data = data.map(d => d.unshaved)
       this.myChart.data.datasets[2].data = data.map(d => d.target)
       this.myChart.update();
   }

    componentDidMount() {
        const {data, timescale, title1, title2, title3, color1, color2, color3} = this.props;
       
        this.myChart = new Chart(this.chartRef.current,{
            type: 'line',
            options: {
                legend:{
                    labels:{
                        fontColor:'black'
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [
                        {   gridLines:{
                            color:'rgba(0,0,0, 0.1)'
                          },
                            type: 'time',
                            time: {
                                unit: timescale,
                            }
                        }
                    ],
                    yAxes: [
                        {gridLines:{
                            color:'rgba(0,0,0, 0.1)'
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
                    data: data.map(d=> d.demand),
                    fill: 'none',
                    backgroundColor: color1,
                    pointRadius: 2,
                    borderColor: color1,
                    borderWidth: 1,
                    lineTension: 0.2
                }, {
                    label: title2,
                    data: data.map(d=> d.unshaved),
                    fill: 'none',
                    backgroundColor: color2,
                    pointRadius: 0.5,
                    borderColor: color2,
                    borderWidth: 1,
                    lineTension: 0
                }, {
                    label: title3,
                    data: data.map(d=> d.target),
                    fill: 'none',
                    backgroundColor: color3,
                    pointRadius: 1,
                    borderColor: color3,
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

export default LineChart3;
