import React, { Component } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
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
          <h1>React Dashboard Demo</h1>
          <p>
            Built with React.js and Chart.js based on a project by{" "}
            <a href="https://www.createwithdata.com/react-chartjs-dashboard/">
              Create with Data
            </a>
          </p>
        </div>

        <div className="main chart-wrapper">
          
          <LineChart
            data={this.state.feeds[0].data}
            title={this.state.feeds[0].title}
            color="#ffa600"
          />
        </div>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[1].data}
              title={this.state.feeds[1].title}
              color="#955196"
            />
          </div>

          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.feeds[3].data}
              title={this.state.feeds[3].title}
              color="#ff6e54"
            />
          </div>
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={this.state.feeds[2].data}
              title={this.state.feeds[2].title}
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
