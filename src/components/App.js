import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import LineChart2 from "./LineChart2";
import LineChart3 from "./LineChart3";
import data from "../data";
import Chart from "chart.js";

// Bootstrap imports.
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

class App extends Component {
  state = { feeds: data() };

  componentDidMount() {
    Chart.defaults.global.defaultFontColor = "#000000";
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    window.setInterval(() => {
      this.setState({
        feeds: data(),
      });
    }, 30000);
  }

  render() {
    return (
      <Container fluid className="p-1">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Electric Era Customer Portal | Electrify America
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Billing</Nav.Link>
            <Nav.Link>Support</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>June 15, 2021 | 06:18:32 AM (UTC-7)</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col xs={2} className="bg-light">
            <p/>
            <Row className="justify-content-center">
              <h5>Active Installations</h5>
            </Row>
            <Row className="border-top">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <b>Site 1</b>
                      <br/>
		                3410 W 3rd St., Los Angeles, CA 90020
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <b>Site 2</b>
                      <br/>
		                3400 W Magnolia Blvd., Burbank, CA 91505
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <b>Site 3</b>
                      <br/>
		                3100 Baldwin Park Blvd., Baldwin Park, CA 91706
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
            </Row>
          </Col>
          <Col xs={10}>
            <Row>
              <p/>
            </Row>
            <Row>
              <Col>
                <h4>Power Demand - 24 Hour</h4>
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
              </Col>
              <Col>
                <h4>Power Demand - Billing Cycle</h4>
                <LineChart2
                  data={this.state.feeds[1].data}
                  timescale="day"
                  title1={this.state.feeds[1].title1}
                  title2={this.state.feeds[1].title2}
                  color1="#ffa600"
                  color2="#a600ff"
                />
              </Col>
            </Row>
            <Row>
              <p/>
            </Row>

            <Row>
              <p/>
            </Row>

            <Row className="justify-content-center">
              <h4>12-Month PowerNode Savings</h4>
            </Row>
            <Row>
              <Table striped border>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Amount Saved ($)</th>
                    <th>Click for Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="align-middle">Peak Shaving</th>
                    <th class="align-middle">$42,481.86</th>
                    <th><Button variant="info">Details</Button></th>
                  </tr>
                  <tr>
                    <th class="align-middle">Grid Services Profit</th>
                    <th class="align-middle">$18,034.80</th>
                    <th><Button variant="info">Details</Button></th>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <p/>
            </Row>

            <Row className="justify-content-center">
              <h4>Site Controls</h4>
            </Row>
            <Row className="justify-content-center">
              <Card style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title>Operational Control</Card.Title>
                  <Card.Text>
                    Use this to enable/disable the PowerNode automated operation to service the site.
                  </Card.Text>
                  <Button variant="primary">Disable PowerNode</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title>Maintenance Window</Card.Title>
                  <Card.Text>
                    Set your maintenance window here.
                  </Card.Text>
                  <Button variant="primary">Change Window</Button>
                </Card.Body>
              </Card>
            </Row>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
