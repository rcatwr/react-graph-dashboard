import React, { createRef, Component } from "react";
import Chart from 'chart.js'

class Doughnut extends Component {
  constructor() {
    super();
    this.chartRef = createRef();
  }

  componentDidUpdate() {
      const {data} = this.props;
      this.myChart.data.labels = data.map(d => d.label )
      this.myChart.data.datasets[0].data = data.map(d=>d.value)
      this.myChart.update();
  }


  componentDidMount() {
    const { data, colors } = this.props;
    this.myChart = new Chart(this.chartRef.current, {
      options:{
          maintainAspectRatio: false,
          legend:{
              labels:{
                  fontColor:'white'
              }
          }
        
        },
      type: "doughnut",
      data: {
        labels: data.map((d) => d.label),
        datasets: [
          {
            data: data.map((d) => d.value),
            backgroundColor: colors,
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default Doughnut;
