import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { template } from '@babel/core';
import { throwStatement, restElement } from '@babel/types';
import FormError from './FormError';
import axios from 'axios';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            clientEmail: '',
            clientHouseAge: '',
            clientAddress: '',
            clientType: 'customer',
            knowProb: 'No',
            clientQuestion: '',
            problemDesc: '',
            clientZip: '',
            clientCare: 1,
            clientPay: 10,
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
        let fieldValidationErrors = this.state.formErrors;      /*This ValidateField Method is used to restrict entry in input fields to appropraite values */

        switch(fieldName) {
            case 'clientName': {                /*Validates the client name field */
                this.state.clientNameValid = value.length > 0;
                fieldValidationErrors.clientName = this.state.clientNameValid ? '' : 'Please provide a name';
                break;
            }
            case 'clientEmail': {               //Validates the clientEmail field
                this.state.clientEmailValid = /\S+@\S+\.\S+/.test(value);
                fieldValidationErrors.clientEmail = this.state.clientEmailValid ? '' : 'Email is invalid';
                break;
            }
            case 'clientHouseAge': {            //Validates the clientAge field
                this.state.clientHouseAgeValid = !isNaN(value);
                fieldValidationErrors.clientHouseAge = this.state.clientHouseAgeValid ? '' : 'Please provide a valid house age';
                break;
            }
            case 'clientAddress': {             //Validates the clientAddress field
                this.state.clientAddressValid = value.length > 0;
                fieldValidationErrors.clientHouseAddress = this.state.clientAddressValid ? '' : 'Please provide a home address';
                break;
            }
            case 'clientZip': {                 //Validates the clientZip field
                this.state.clientZipValid = !isNaN(value);
                fieldValidationErrors.clientZip = this.state.clientZipValid ? '' : 'Please enter a valid zip code';
                break;
            }
        }
        this.setState({                         //Checks to see the validity of the form inputs 
            formErrors: fieldValidationErrors,
            clientNameValid: this.state.clientNameValid,
            clientEmailValid: this.state.clientEmailValid,
            clientHouseAgeValid: this.state.clientHouseAgeValid,
            clientAddressValid: this.state.clientAddressValid,
            clientZipValid: this.state.clientZipValid
        }, this.validateForm);

    }

    validateForm() {
        this.setState({
            formValid:  this.state.clientNameValid &&
                        this.state.clientEmailValid
        });
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value},
            () => {
                this.validateField(name, value);
            }
        );

    }

    handleSubmit(event){
        console.table(this.state);
        event.preventDefault();
        const { clientName, 
                clientEmail, 
                clientHouseAge, 
                clientAddress, 
                clientZip,
                clientType,
                problemDesc, 
                clientQuestion,
                clientCare,
                clientPay,
                anotherProb,
                waterTesting
             } = this.state;
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
            clientAddress: clientAddress, 
            clientType: clientType,
            clientZip: clientZip,
            clientHouseAge: clientHouseAge, 
            problemDesc: problemDesc, 
            clientQuestion: clientQuestion,
            clientCare: clientCare,
            clientPay: clientPay,
            anotherProb: anotherProb,
            waterTesting: waterTesting
        }
        //console.log(clientObject);
        axios.post('api/clientFormSubmit', clientObject)
            .then((req, res) => {
                //console.log('response', req);
            });
        
        //event.reset();
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
    }

    render() { 
        return (        //Code for the input fields in our contact form
            <form className="text-center" id="contactForm" onSubmit={this.handleSubmit} > 
                <div className="panel panel-default">
                    <FormError formErrors={this.state.formErrors}/>
                </div>
                <div className="form-group">
                    <label>
                        Name:
                        <input required id="name" name="clientName" type="text" className={`form-control ${this.errorClass(this.state.formErrors.clientName)}`} onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input required id="email" name="clientEmail" type ="text" className={`form-control ${this.errorClass(this.state.formErrors.clientEmail)}`} placeholder="name@example.com" onChange={this.handleChange}/>
                    </label>
                </div>          
                <div className="form-group">
                    <label>
                        Address:
                        <input id="address" name="clientAddress" className={`form-control ${this.errorClass(this.state.formErrors.clientAddress)}`} type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        ZIP Code (no dashes):
                        <input id="zip" name="clientZip" className={`form-control ${this.errorClass(this.state.formErrors.clientZip)}`} type="text"
                        value = {this.state.clientZip}
                        onChange={(event) => {this.handleChange(event)}}
                        />
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
                        onChange= {(event) => {this.handleChange(event)}}
                        />
                    </label>
                </div>
                <fieldset class="form-group">
                    <div class="row radios">
                        <legend class="col-form-label col-sm-2 pt-0">Are you a potential...</legend>
                    </div>
                    <div class="row radios">
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" name="clientType" type="radio" id="customer" value="customer" defaultChecked onClick={this.handleChange}/>
                                <label class="form-check-label" for="customer">customer?</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" name="clientType" type="radio" id="investor" value="investor" onClick={this.handleChange}/>
                                <label class="form-check-label" for="investor">investor?</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" name="clientType" type="radio" id="partner" value="partner" onClick={this.handleChange}/>
                                <label class="form-check-label" for="partner">partner/collaborator?</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="form-group">
                    <div class="row radios">
                        <legend class="col-form-label col-sm-2 pt-0">Do you know the problem with your tap water?</legend>
                    </div>
                    <div class="row radios">
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" id="prob-yes" name="knowProb" type="radio" value="Yes" onClick={this.handleChange}/>
                                <label class="form-check-label" for="prob-yes">Yes</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="prob-no" name="knowProb" type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                                <label class="form-check-label" for="prob-no">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    {this.state.knowProb==="Yes"? <label> Please describe your problem<textarea name ="problemDesc" cols="50" rows="5" className="form-control" row="3" onChange={this.handleChange}/></label>:
                    <span/>}
                </div>
                <fieldset class="form-group">
                    <div class="row radios">
                        <legend class="col-form-label col-sm-2 pt-0">Are you interested in having your water tested?</legend>
                    </div>
                    <div class="row radios">
                        <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" id="testing-yes" name="waterTesting" type="radio" value="Yes" onClick={this.handleChange}/>
                                    <label class="form-check-label" for="testing-yes">Yes</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" id="testing-no" name="waterTesting" type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                                    <label class="form-check-label" for="testing-no">No</label>
                                </div>
                        </div>
                    </div>
                </fieldset>     
                <div className="form-group">
                <label> 
                    How much do you care about the quality of your tap water? (1 = least care; 5 = most care)
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
                    <label>Please upload any relevant information
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
        //Above codes the input fields for the questions in our contact form that the customer needs to fill out
        //We have placed certain restrictions to ensure that the form is taking in appropriate values
        //Buttons are given styling attributes
        //Drop down boxes are given hover features
        );
    }
}
 
export default Form;
