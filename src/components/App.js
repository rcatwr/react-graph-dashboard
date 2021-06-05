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
    }, 5000);
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
            <Navbar.Text>Customer Portal v1.0</Navbar.Text>
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
                      304 W. 3rd Ave., Los Angeles, CA 90018
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <b>Site 2</b>
                      <br/>
                      1234 Hello World Lane, Phoenix, AZ 90356
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <b>Site 3</b>
                      <br/>
                      1234 Goodbye World Road, Seattle, WA 98133
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
            <Row className="justify-content-center">
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>Operational Control</Card.Title>
                  <Card.Text>
                    Use this to enable/disable the BESS automated operation to service the site.
                  </Card.Text>
                  <Button variant="primary">Disable BESS</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>Automatic Updates</Card.Title>
                  <Card.Text>
                    You have authorized automatic software updates during the maintenance window. Use this to disable this feature.
                  </Card.Text>
                  <Button variant="primary">Disable Auto-Update</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>Maintenance Window</Card.Title>
                  <Card.Text>
                    Set your maintenance window here.
                  </Card.Text>
                  <Button variant="primary">Change Window</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <p/>
            </Row>
            <Row>
              <p/>
            </Row>
            <Row className="justify-content-center">
              <h4>Year-to-Date BESS Savings</h4>
            </Row>
            <Row>
              <Table striped border>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Amount Saved ($)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="align-middle">Peak Shaving</th>
                    <th class="align-middle">$3540.16</th>
                    <th><Button variant="info">Details</Button></th>
                  </tr>
                  <tr>
                    <th class="align-middle">Infrastructure Avoidance</th>
                    <th class="align-middle">$980.22</th>
                    <th><Button variant="info">Details</Button></th>
                  </tr>
                  <tr>
                    <th class="align-middle">Wholesale Energy Bidding</th>
                    <th class="align-middle">$145.60</th>
                    <th><Button variant="info">Details</Button></th>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
