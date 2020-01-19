import axios from 'axios';
import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    const headers = {
        'Content-Type': 'application/json'
      };

      const data = {
        'formApplicationName' : this.props.values.formApplicationName, 
        'formContactName' : this.props.values.formContactName, 
        'formContactEmail': this.props.values.formContactEmail, 
        'applicationLifeCycle': this.props.values.applicationLifeCycle,
        'customerFacing': this.props.values.customerFacing,
        'applicationAvailabilityRequirement': this.props.values.applicationAvailabilityRequirement,
        'businessFunctionReadiness': this.props.values.businessFunctionReadiness,
        'RTORequirement': this.props.values.RTORequirement,
        'RPORequirement': this.props.values.RPORequirement,
        'deploymentGeography': this.props.values.deploymentGeography,
        'numberOfInternalUsers': this.props.values.numberOfInternalUsers,
        'numberOfExternalUsers': this.props.values.numberOfExternalUsers,
        'estimatedGrowthRate': this.props.values.estimatedGrowthRate,
        'dataClassification': this.props.values.dataClassification,
        'appRegulatoryAndContractualRequirements': this.props.values.appRegulatoryAndContractualRequirements,
        'financialRiskDueToUnavailability': this.props.values.financialRiskDueToUnavailability,
        'applicationArchitectureKnowledgeLevel': this.props.values.applicationArchitectureKnowledgeLevel,
        'COTSOrNOT': this.props.values.COTSOrNOT,
        'vendorSupportForCloud': this.props.values.vendorSupportForCloud,
        'sourceCodeAvailability': this.props.values.sourceCodeAvailability,
        'applicationStability': this.props.values.applicationStability,
        'appServerCloudReadiness': this.props.values.appServerCloudReadiness,
        'listOfExternalDependency': this.props.values.listOfExternalDependency,
        'programmingLanguageApplicationLoadPredictability': this.props.values.programmingLanguageApplicationLoadPredictability,
        'distributedArchitectureDesignOrNot': this.props.values.distributedArchitectureDesignOrNot,
        'latencyRequirement': this.props.values.latencyRequirement,
        'applicationVendorOsOrPlatform': this.props.values.applicationVendorOsOrPlatform,
        'applicationDatabaseVendorTypeVersion': this.props.values.applicationDatabaseVendorTypeVersion,
        'integratedMiddlewareAttributes': this.props.values.integratedMiddlewareAttributes,
        'businessCriticality': this.props.values.businessCriticality
    }

    axios.post("/add-entry", data, { headers : headers}).then(e => {
        this.props.nextStep();

    }).catch(error =>{
        console.log(error);
    });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {formApplicationName, formContactName, formContactEmail, applicationLifeCycle, customerFacing, applicationAvailabilityRequirement, businessFunctionReadiness, RTORequirement, RPORequirement , deploymentGeography, numberOfInternalUsers, numberOfExternalUsers, estimatedGrowthRate, dataClassification, appRegulatoryAndContractualRequirements, financialRiskDueToUnavailability, applicationArchitectureKnowledgeLevel,
        COTSOrNOT, vendorSupportForCloud, sourceCodeAvailability, applicationStability, appServerCloudReadiness, listOfExternalDependency, programmingLanguageApplicationLoadPredictability,
        distributedArchitectureDesignOrNot, hardwareDependencies, latencyRequirement, applicationVendorOsOrPlatform, applicationDatabaseVendorTypeVersion, integratedMiddlewareAttributes, applicationStatus, applicationAvailability, businessCriticality}
    } = this.props;
    return (
      <React.Fragment>
        <div className="container form-tab">

        <h1 className="title">Application Information</h1>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enter Application Name</td>
                <td>{formApplicationName}</td>
              </tr>
              <tr>
                <td>Enter Contact Person name</td>
                <td>{formContactName}</td>
              </tr>
              <tr>
                <td>Enter Email</td>
                <td>{formContactEmail}</td>
              </tr>
            </tbody>
          </Table>

          
        <h1 className="title">Business Alignment</h1>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Business Criticality</td>
                <td>{businessCriticality}</td>
              </tr>
              <tr>
                <td>Customer Facing</td>
                <td>{customerFacing}</td>
              </tr>
              <tr>
                <td>Application life cycle</td>
                <td>{applicationLifeCycle}</td>
              </tr>
              <tr>
                <td>Availability Requirement</td>
                <td>{applicationAvailabilityRequirement}</td>
              </tr>
              <tr>
                <td>Business Function Readiness</td>
                <td>{businessFunctionReadiness}</td>
              </tr>
              <tr>
                <td>RTO Requirements</td>
                <td>{RTORequirement}</td>
              </tr>
              <tr>
                <td>RPO Requirements</td>
                <td>{RPORequirement}</td>
              </tr>
              <tr>
                <td>Deployment Geography information</td>
                <td>{deploymentGeography}</td>
              </tr>
              <tr>
                <td>Number of internal users</td>
                <td>{numberOfInternalUsers}</td>
              </tr>
              <tr>
                <td>Enter Number of External users</td>
                <td>{numberOfExternalUsers}</td>
              </tr>
              <tr>
                <td>Estimated Growth Rate</td>
                <td>{estimatedGrowthRate}</td>
              </tr>
            </tbody>
          </Table>

          <h1 className="title">Risk & Regulatory</h1>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enter Data Classification</td>
                <td>{dataClassification}</td>
              </tr>
              <tr>
                <td>App Regulatory And Contractual Requirements</td>
                <td>{appRegulatoryAndContractualRequirements}</td>
              </tr>
              <tr>
                <td>Financial Risk Due To Unavailability</td>
                <td>{financialRiskDueToUnavailability}</td>
              </tr>
            </tbody>
          </Table>

          <h1 className="title">Application Architecture</h1>
                   <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enter Application Architecture Knowledge Level</td>
                <td>{applicationArchitectureKnowledgeLevel}</td>
              </tr>
              <tr>
                <td>COTS Or NOT</td>
                <td>{COTSOrNOT}</td>
              </tr>
              <tr>
                <td>Vendor Support For Cloud (COTS Only)</td>
                <td>{vendorSupportForCloud}</td>
              </tr>
              <tr>
                <td>Enter Source Code Availability</td>
                <td>{sourceCodeAvailability}</td>
              </tr>
              <tr>
                <td>Application Stability</td>
                <td>{applicationStability}</td>
              </tr>
              <tr>
                <td>App Server Cloud Readiness</td>
                <td>{appServerCloudReadiness}</td>
              </tr>
              <tr>
                <td>List of External Dependencies</td>
                <td>{listOfExternalDependency}</td>
              </tr>
              <tr>
                <td>Programming Language Application Load Predictability</td>
                <td>{programmingLanguageApplicationLoadPredictability}</td>
              </tr>
              <tr>
                <td>Distributed Architecture Design Or Not</td>
                <td>{distributedArchitectureDesignOrNot}</td>
              </tr>
              <tr>
                <td>Enter Hardware Dependencies</td>
                <td>{hardwareDependencies}</td>
              </tr>
              <tr>
                <td>Latency Requirement</td>
                <td>{latencyRequirement}</td>
              </tr>
            </tbody>
          </Table>
          <h1 className="title">Infrastructure Architecture</h1>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Vendor OS/Platform</td>
                <td>{applicationVendorOsOrPlatform}</td>
              </tr>
              <tr>
                <td>Application Database/ Vendor / Type / Version</td>
                <td>{applicationDatabaseVendorTypeVersion}</td>
              </tr>
              <tr>
                <td>Integrated Middleware Attributes</td>
                <td>{integratedMiddlewareAttributes}</td>
              </tr>
            </tbody>
          </Table>
          <Button
              variant="primary"
              onClick={this.back}
              className="button-continue float-left"
            >Back</Button>
          <Button
              variant="primary"
              onClick={this.continue}
              className="button-continue float-right"
            >Save and Submit</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
