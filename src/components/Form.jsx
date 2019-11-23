import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { template } from '@babel/core';
import { throwStatement, restElement } from '@babel/types';
import FormError from './FormError';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            clientEmail: '',
            clientHouseAge: '',
            clientAddress: '',
            knowProb: 'No',
            clientQuestion: '',
            problemDesc: '',
            clientZip: '',
            clientCare: '',
            clientPay: '',
            anotherProb: 'No',
            waterTesting: 'No',
            formErrors: {
                clientName: '',
                clientEmail: '',
                clientHouseAge: '',
                clientAddress: '',
                knowProb: '',
                clientQuestion: '',
                problemDesc: '',
                clientZip: '',
                clientCare: '',
                clientPay: '',
                anotherProb: '',
                waterTesting: ''
            },
            clientNameValid: '',
            clientEmailValid: '',
            clientHouseAgeValid: '',
            clientAddressValid: '',
            clientKnowProbValid: '',
            clientQuestionValid: '',
            clientProblemDescValid: '',
            clientZipValid: '',
            clientCareValid: '',
            clientPayValid: '',
            anotherProbValid: '',
            waterTestValid: ''
          };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let clientNameValid = this.state.clientNameValid;
        let clientEmailValid = this.state.clientEmailValid;
        let clientHouseAgeValid = this.state.clientHouseAgeValid;
        let clientAddressValid = this.state.clientAddressValid;
        let clientKnowProbValid = this.state.clientKnowProbValid;
        let clientQuestionValid = this.state.clientQuestion;
        let clientProblemDescValid = this.state.clientProblemDescValid;
        let clientZipValid = this.state.clientZipValid;
        let clientCareValid = this.state.clientCareValid;
        let clientPayValid = this.state.clientPayValid;
        let anotherProbValid = this.state.anotherProbValid;
        let waterTestValid = this.state.waterTestValid;

        switch(fieldName) {
            case 'clientName': {
                clientNameValid = value.length > 0;
                console.log('clientNameValid: ', clientNameValid);
                fieldValidationErrors.clientName = clientNameValid ? '' : 'Please provide a name';
                break;
            }
            case 'clientEmail': {
                clientEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
                console.log('clientEmailValid: ', clientEmailValid);
                fieldValidationErrors.clientEmail = clientEmailValid ? '' : 'Email is invalid';
                break;
            }
            case 'clientHouseAge': {
                clientHouseAgeValid = value.length > 0;
                fieldValidationErrors.clientHouseAge = clientHouseAgeValid ? '' : 'Please provide a house age';
                break;
            }
            case 'clientAddress': {
                clientAddressValid = value.length > 0;
                fieldValidationErrors.clientHouseAddress = clientAddressValid ? '' : 'Please provide a home address';
                break;
            }
            case 'clientZip': {
                clientZipValid = value.length === 5;
                fieldValidationErrors.clientZip = clientZipValid ? '' : 'Please enter a valid zip code';
                break;
            }
        }
        this.setState({
            formErrors: fieldValidationErrors,
            clientNameValid: clientNameValid,
            clientEmailValid: clientEmailValid,
            clientHouseAgeValid: clientHouseAgeValid,
            clientAddressValid: clientAddressValid,
            clientZipValid: clientZipValid
        }, this.validateForm);

    }

    validateForm() {
        console.log('formValid before', this.state.formValid);
        this.setState({
            formValid:  this.state.clientNameValid &&
                        this.state.clientEmailValid &&
                        this.state.clientAddressValid &&
                        this.state.clientHouseAgeValid &&
                        this.state.clientZipValid
        })
        console.log('formValid after', this.state.formValid);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value},
            () => {
                this.validateField(name, value);
                console.log(this.state);
            }
        );

    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(this.state);
        const { clientName, clientEmail, clientHouseAge, clientAddress, problemDesc, clientQuestion } = this.state;
        let message = {
            clientHouseAge,
            clientAddress
        }
        let templateParams = {
            from_name: clientName,
            to_name: 'spencer.comora@gmail.com',
            message_html:   'Client name:\t'+ clientName + '\n'
                            + 'Client email:\t' + clientEmail + '\n'
                            + 'Client address:\t' + clientAddress + '\n'
                            + 'Client house age:\t' + clientHouseAge + '\n'
                            + 'Client problem description:\t' + problemDesc + '\n'
                            + 'Client question:\t' + clientQuestion

            
        }
        //console.log(templateParams);
        /*
        emailjs.send(
             'spencer_gmail',
             'template_XadAOTCZ',
              templateParams,
             'user_M6kLPVJil1znauH2TGfwg'
        );
        */
        let clientObject = {
            
            clientName: clientName, 
            clientEmail: clientEmail, 
            clientHouseAge: clientHouseAge, 
            clientAddress: clientAddress, 
            problemDesc: problemDesc, 
            clientQuestion: clientQuestion
        }
        console.log(clientObject);
        axios.post('api/clientFormSubmit', clientObject)
            .then((req, res) => {
                console.log('response', req);
            });
        
        //event.preventDefault();
        //event.reset();
        
        
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() { 
        return (
            <form className="text-center" id="contactForm" onSubmit={this.handleSubmit} >
                <div className="panel panel-default">
                    <FormError formErrors={this.state.formErrors}/>
                </div>
                <div className="form-group">
                    <label>
                        Name:
                        <input required id="name" name="clientName" type="text" className="form-control" onChange={this.handleChange}/>
                    </label>
                </div>
                {/*<div className={"form-group" + this.errorClass(this.state.formErrors.clientEmail)}> */}
                <div className="form-group">
                    <label>
                        Email:
                        <input required id="email" name="clientEmail" type ="text" className="form-control" placeholder="name@example.com" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input id="address" name="clientAddress" className="form-control"type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        House Age:
                        {/* This code is different from the other form inputs 
                            as it was rewritten to only allow number inputs.
                            It is based on an example from
                            https://stackoverflow.com/a/47900329 */}
                        <input id="houseAge" name="clientHouseAge" type="text" className="form-control" 
                        value = {this.state.clientHouseAge}
                        onChange={event => this.setState({clientHouseAge: event.target.value.replace(/\D/,'')})}/>
                    </label>
                </div>
                <div className="form-group">
                    <p>
                        Do you know the problem with your tap water?
                    </p>
                        <label>
                            No {' '}
                            <input name="knowProb"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label className ="m-2">
                            Yes {' '}
                            <input name="knowProb" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>
                <div className="form-group">
                    {this.state.knowProb==="Yes"? <label> Please describe your problem<textarea name ="problemDesc" cols="50" rows="5" className="form-control" row="3" onChange={this.handleChange}/></label>:
                    <span/>}
                </div>
                <div className="form-group">
                    <p>
                    Are you concerned about any water in your home other than tap water?
                    </p>
                        <label>
                            No {' '}
                            <input name="anotherProb"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label className ="m-2">
                            Yes {' '}
                            <input name="anotherProb" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>
                <div className="form-group">
                    <p>
                    Are you interested in having your water tested?
                    </p>
                        <label>
                            No {' '}
                            <input name="waterTesting"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label className ="m-2">
                            Yes {' '}
                            <input name="waterTesting" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>
                <div className="form-group">
                <label>
                    How much do you care about the quality of your tap water?
                <select name="clientCare" onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </label>
                </div>
                <div className="form-group">
                <label>
                    What is the maximum you are willing to pay to have your water tested?
                <select name="clientPay" onChange={this.handleChange}>
                    <option value="10">$10</option>
                    <option value="20">$20</option>
                    <option value="50">$50</option>
                    <option value="150">$150</option>
                    <option value="300">$300</option>
                </select>
                </label>
                </div>
                <div className="form-group">
                    <label>Please upload any relevent information
                        <input type="file" className="form-control-file"/>                        
                    </label>

                </div>
                <div className="form-group">
                    <label>
                        Questions:
                        <textarea id="question" name="clientQuestion" cols="50" rows="5" className="form-control" onChange={this.handleChange}></textarea>
                    </label>
                </div>

                <button className="btn btn-primary" disabled={!this.state.formValid}>submit</button>
            </form>


        );
    }
}
 
export default Form;
