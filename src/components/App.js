import React, { Component } from "react";
import BarChart from "./BarChart";
import LineChart2 from "./LineChart2";
import LineChart3 from "./LineChart3";
import Doughnut from "./Doughnut";
import data from "../data";
import Chart from "chart.js";

class App extends Component {
  state = { feeds: data() };

  componentDidMount() {
    Chart.defaults.global.defaultFontColor = "#FFFFFF6F";
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    window.setInterval(() => {
      this.setState({
        feeds: data(),
      });
    }, 5000);
  }

  render() {
    return (
      <div className="app">
        <div className="title">
          <h1>Electrify America - Dashboard</h1>
          <p>
	  			  
          </p>
        </div>

        <div className="main chart-wrapper">
          <h2>Power Demand - 24 Hour</h2>
          <LineChart3
            data={this.state.feeds[0].data}
            timescale="minute"
            title1={this.state.feeds[0].title1}
            title2={this.state.feeds[0].title2}
            title3={this.state.feeds[0].title3}
            color1="#ffa600"
            color2="#a6ff00"
            color3="#a600ff"
          />
        </div>
        <div className="main chart-wrapper">
          <h2>Power Demand - Billing Cycle</h2>
          <LineChart2
            data={this.state.feeds[1].data}
            timescale="day"
            title1={this.state.feeds[1].title1}
            title2={this.state.feeds[1].title2}
            color1="#ffa600"
            color2="#a600ff"
          />
        </div>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[2].data}
              title={this.state.feeds[2].title}
              color="#955196"
            />
          </div>

          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[4].data}
              title={this.state.feeds[4].title}
              color="#ff6e54"
            />
          </div>
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={this.state.feeds[3].data}
              title={this.state.feeds[3].title}
              colors={[
                "#003f5c",
                "#444e86",
                "#955196",
                "#dd5182",
                "#ff6e54",
                "#ffa600",
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
