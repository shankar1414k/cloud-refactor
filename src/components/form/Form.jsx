import React, { Component } from 'react';
import Confirm from './Confirm.jsx';
import Navbar from './Navbar.jsx';
import Success from './Success.jsx';
import Tab1 from './Tab1.jsx';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class Form extends Component {

    state = {
        step: 1,
        resume: null,
        formFirstName: '',
        formLastName: '',
        formSmallSOC:'',
        formDob: '',
        formEmail: '',
        formPhone:'',
        formAddress:'',
        formCity:'',
        formState:'',
        formZip:'',
        formPhoneInterview:'',
        formInPerson: '',
        formStartAssignment:'',
        formWorkAuthorization:'',
        formIdentity:null,
        user: {}
    }

    nextStep = () => {
        const { step }  = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step }  = this.state;
        this.setState({ step: step - 1  });
    }

    goto = ( gotoStepNumber ) => {
        this.setState({ step: gotoStepNumber  });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    
    handleChangeFile = input => e => {
        this.setState({[input]: e.target.files[0]});
    }
    componentDidMount(){
        Auth.currentSession().then(sessionData => {
                this.setState({ 
                user: sessionData.getIdToken().payload,
                formFirstName: sessionData.getIdToken().payload.given_name,
                formLastName: sessionData.getIdToken().payload.family_name,
                formEmail: sessionData.getIdToken().payload.email,
            })});

    };
    showStep = () => {

        const {step} = this.state;

        const{resume,formFirstName, formLastName, formSmallSOC,formDob,formEmail,formPhone,formAddress,formCity,formState,formZip,formPhoneInterview,formInPerson,formStartAssignment,formWorkAuthorization,formIdentity,user} = this.state;
        const values = {resume,formFirstName, formLastName, formSmallSOC,formDob,formEmail,formPhone,formAddress,formCity,formState,formZip,formPhoneInterview,formInPerson,formStartAssignment,formWorkAuthorization,formIdentity,user};
       
        switch(step){
            case 1 :
                return(
                    <Tab1
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        handleChangeFile = {this.handleChangeFile}
                        values ={values}
                    />
                );
            case 2:
                return <Success />;
            default:
                return <h1>Something went wrong</h1>    
        }

    }

    render() {

        return (

            <div className="container">
                
                {this.showStep()}
                {/* <Navbar goto = {this.goto} step = {this.state.step}
                        />
                        {this.showStep()} */}
                {/* <Row>
                    <Col xs lg="2">
                        <Navbar goto = {this.goto} step = {this.state.step}
                        />
                    </Col>                    
                    <Col>{this.showStep()}</Col>
                </Row> */}
            </div>

        )
      }
}

export default withRouter(Form)
