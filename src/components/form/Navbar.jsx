import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export class Navbar extends Component {

    gotoStep = e => {
        this.props.goto(parseInt(e));
      };

    render() {
    const { step } = this.props;
        return (
            // <Tabs id="form-navbar" activeKey={step} onSelect={k => this.gotoStep(k)} className="flex-column">
            <Tabs id="form-navbar" activeKey={step} onSelect={k => this.gotoStep(k)}>
                <Tab eventKey="1" title="Basic information"></Tab>
                {/* <Tab eventKey="2" title="Business Alignment"></Tab>
                <Tab eventKey="3" title="Risk and Regulatory"> </Tab>
                <Tab eventKey="4" title="Application Architecture"></Tab>
                <Tab eventKey="5" title="Infrastructure Architecture"></Tab>
                <Tab eventKey="6" title="Confirm and Submit"></Tab> */}
            </Tabs>
        )
    }
}

export default Navbar


