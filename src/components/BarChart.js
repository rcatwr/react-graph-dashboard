import React, { Component, createRef } from "react";
import Chart from "chart.js";

class BarChart extends Component {
  constructor() {
    super();
    this.chartRef = createRef();
  }

  componentDidMount() {
    const { data, title, color } = this.props;
    this.myChart = new Chart(this.chartRef.current, {
      type: "bar",
      options: {
        legend:{
          labels:{
              fontColor:'white'
          }
      },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [
            {  
              gridLines:{
                color:'rgba(255,255,255, 0.1)'
              },
              ticks: {
                min: 0,
                max: 100,
              },
            },
          ],
          xAxes:[
            {
              gridLines:{
                color:'rgba(255,255,255, 0.1)'
              }
            }
          ]
        },
      },
      data: {
        labels: data.map((d) => d.label),
        datasets: [
          {
            label: title,
            data: data.map((d) => d.value),
            backgroundColor: color,
          },
        ],
      },
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    this.myChart.data.labels = data.map((d) => d.label);
    this.myChart.data.datasets[0].data = data.map((d) => d.value);
    this.myChart.update();
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default BarChart;
