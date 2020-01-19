import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import FileInput from './FileInput.jsx'
import axios from 'axios';


export class Tab1 extends Component {
    continue = e => {
        e.preventDefault();

    const headers = {
        'Content-Type': 'multipart/form-data'
      };

      var bodyFormData = new FormData();

      bodyFormData.set('userId', this.props.values.user.sub);
      bodyFormData.set('firstName', this.props.values.formFirstName);
      bodyFormData.set('lastName', this.props.values.formLastName);
      bodyFormData.set('smallSoc', this.props.values.formSmallSOC);
      bodyFormData.set('dob', this.props.values.formDob);
      bodyFormData.set('email', this.props.values.formEmail);
      bodyFormData.set('phone', this.props.values.formPhone);
      bodyFormData.set('address', this.props.values.formAddress);
      bodyFormData.set('city', this.props.values.formCity);
      bodyFormData.set('state', this.props.values.formState);
      bodyFormData.set('zip', this.props.values.formZip);
      bodyFormData.set('phoneInterviewAvailability', this.props.values.formPhoneInterview);
      bodyFormData.set('inPersonInterviewAvailability', this.props.values.formInPerson);
      bodyFormData.set('workAuthorizationType', this.props.values.formWorkAuthorization);
      bodyFormData.set('startAssignment', this.props.values.formStartAssignment);
      bodyFormData.append('resume', this.props.values.resume,  this.props.values.resume.name);
      bodyFormData.append('govId', this.props.values.formIdentity,  this.props.values.formIdentity.name);

        axios.post("/add-entry", bodyFormData, { headers : headers}).then(e => {
            this.props.nextStep();

        }).catch(error =>{
            console.log(error);
        });
      };

     

    render() {
        const { values, handleChange, handleChangeFile } = this.props;
        return (
            <div className="container">
                <Form className="form-tab">
                    <Form.Group controlId="formFirstName" as={Row}>
                        <Form.Label column sm="4">
                        First Name*
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="First Name"
                        required
                        value={values.formFirstName}
                        onChange={handleChange('formFirstName')}
                        />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formLastName" as={Row}>
                        <Form.Label column sm="4">
                        Last Name*
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Last Name"
                        required
                        value={values.formLastName}                       
                        onChange={handleChange('formLastName')}
                        />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formSmallSOC" as={Row}>
                        <Form.Label column sm="4">
                        Last 3 Digits of Social Security Number:
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Last 3 Digits of Social Security Number:"
                        value={values.formSmallSOC}                       
                        onChange={handleChange('formSmallSOC')}
                        />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formDob" as={Row}>
                        <Form.Label column sm="4">
                        Month and Day of Birth (year not needed):
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Month and Day of Birth (year not needed):"
                         required={true}
                        value={values.formDob}                       
                        onChange={handleChange('formDob')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formEmail" as={Row}>
                        <Form.Label column sm="4">
                        Enter email
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control disabled type="text" placeholder="Enter Email"
                        value={values.formEmail}
                        onChange={handleChange('formEmail')}
                        />
                        </Col>
                    </Form.Group>  
                    <Form.Group controlId="formPhone" as={Row}>
                        <Form.Label column sm="4">
                        Enter Phone number
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Phone number"
                        value={values.formPhone}
                        onChange={handleChange('formPhone')}
                        />
                        </Col>
                    </Form.Group>  
                    

                    <Form.Group controlId="formAddress" as={Row}>
                        <Form.Label column sm="4">
                        Address
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Address"
                        value={values.formAddress}                       
                        onChange={handleChange('formAddress')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formCity" as={Row}>
                        <Form.Label column sm="4">
                        City
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter City"
                        value={values.formCity}                       
                        onChange={handleChange('formCity')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formState" as={Row}>
                        <Form.Label column sm="4">
                        State
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter State"
                        value={values.formState}                       
                        onChange={handleChange('formState')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formZip" as={Row}>
                        <Form.Label column sm="4">
                        Zip
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Zip"
                        value={values.formZip}                       
                        onChange={handleChange('formZip')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formPhoneInterview" as={Row}>
                        <Form.Label column sm="4">
                        Availability to Interview by PHONE (ex. 1 or 2 days notice):
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Availability to Interview by PHONE (ex. 1 or 2 days notice):"
                        value={values.formPhoneInterview}                       
                        onChange={handleChange('formPhoneInterview')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formInPerson" as={Row}>
                        <Form.Label column sm="4">
                        Availability to Interview in IN-PERSON(how much notice do you need? ex. 1, 2, 3, or 4 days notice)
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Availability to Interview by PHONE (ex. 1 or 2 days notice):"
                        value={values.formInPerson}                       
                        onChange={handleChange('formInPerson')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formStartAssignment" as={Row}>
                        <Form.Label column sm="4">
                        Availability to start new assignment (ASAP, 1 week, 2 weeks, etc.)
                        **Need to be able to start with 2 weeks notice unless approved otherwise**
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Availability to start new assignment"
                        value={values.formStartAssignment}                       
                        onChange={handleChange('formStartAssignment')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formWorkAuthorization" as={Row}>
                        <Form.Label column sm="4">
                        Work Authorization: (H1B, EAD, GC, US Citizen):
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="text" placeholder="Enter Work Authorization: (H1B, EAD, GC, US Citizen):"
                        value={values.formWorkAuthorization}                       
                        onChange={handleChange('formWorkAuthorization')}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formIdentity" as={Row}>
                        <Form.Label column sm="4">
                        Upload Valid Government Identification (Drivers License, State Id, EAD or Passport)
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="file" placeholder="Enter Email"
                        onChange={handleChangeFile('formIdentity')}
                        />
                        </Col>
                    </Form.Group>  
                    <Form.Group controlId="resume" as={Row}>
                        <Form.Label column sm="4">
                        Select Resume to Upload
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control type="file" placeholder="Enter Email"
                        onChange={handleChangeFile('resume')}
                        />
                        </Col>
                    </Form.Group>  

                      
                </Form>
                <Button
                    variant="primary"
                    onClick={this.continue}
                    className="button-continue float-right"
                >Submit</Button>
      </div>
        )
    }
}

export default Tab1
