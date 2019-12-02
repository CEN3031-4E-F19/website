import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { template } from '@babel/core';
import { throwStatement, restElement } from '@babel/types';
import FormError from './FormError';
import axios from 'axios';

//counter to count the number of submissions in one week
var numSubmissions = 0;
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

        switch(fieldName) {
            case 'clientName': {
                this.state.clientNameValid = value.length > 0;
                fieldValidationErrors.clientName = this.state.clientNameValid ? '' : 'Please provide a name';
                break;
            }
            case 'clientEmail': {
                this.state.clientEmailValid = /\S+@\S+\.\S+/.test(value);
                fieldValidationErrors.clientEmail = this.state.clientEmailValid ? '' : 'Email is invalid';
                break;
            }
            case 'clientHouseAge': {
                this.state.clientHouseAgeValid = !isNaN(value);
                fieldValidationErrors.clientHouseAge = this.state.clientHouseAgeValid ? '' : 'Please provide a valid house age';
                break;
            }
            case 'clientAddress': {
                this.state.clientAddressValid = value.length > 0;
                fieldValidationErrors.clientHouseAddress = this.state.clientAddressValid ? '' : 'Please provide a home address';
                break;
            }
            case 'clientZip': {
                this.state.clientZipValid = !isNaN(value);
                fieldValidationErrors.clientZip = this.state.clientZipValid ? '' : 'Please enter a valid zip code';
                break;
            }
        }
        this.setState({
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
                        this.state.clientEmailValid &&
                        this.state.clientAddressValid &&
                        this.state.clientHouseAgeValid
        });
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        if((name == "clientZip") || (name == "clientHouseAge"))
        {
            {/* This code is different from the other form inputs
                as it was rewritten to only allow number inputs.
                It is based on an example from
                https://stackoverflow.com/a/47900329 */}
            this.setState({[name]: value.replace(/\D/,'')});
        }
        else
        {
            this.setState({[name]:value},
                () => {
                    this.validateField(name, value);
                }
            );
        }

    }

    handleSubmit(event){
        event.preventDefault();
        //there's a new submission, so increment numSubmissions
        numSubmissions++;
        const { clientName, 
                clientEmail, 
                clientHouseAge, 
                clientAddress, 
                problemDesc, 
                clientQuestion,
                clientCare,
                clientPay,
                anotherProb,
                waterTesting,
                clientZip
             } = this.state;
        console.log(this.state);
        
        /*
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
        */

        let templateParams = {
            from_name: 'University of Florida CEN3031',
            to_name: 'Safa',
            message_html: 'You have received ' + numSubmissions + ' new submissions since last Friday.'
        };
        
        var date = new Date();
        //if it's a friday, send out the number of submissions since last friday
        if(date.getDay() == 5) {
            console.log(templateParams);
            
            emailjs.send(
                'spencer_gmail',
                'template_XadAOTCZ',
                templateParams,
                'user_M6kLPVJil1znauH2TGfwg'
            );
            
            //reset numSubmissions
            //numSubmissions = 0;
        }
        
        let clientObject = {
            
            clientName: clientName, 
            clientEmail: clientEmail, 
            clientAddress: clientAddress, 
            clientHouseAge: clientHouseAge, 
            problemDesc: problemDesc, 
            clientQuestion: clientQuestion,
            clientCare: clientCare,
            clientPay: clientPay,
            anotherProb: anotherProb,
            waterTesting: waterTesting,
            clientZip: clientZip
        }
        //console.log(clientObject);
        axios.post('api/clientFormSubmit', clientObject)
            .then((req, res) => {
                //console.log('response', req);
            });
        
        //event.preventDefault();
        //event.reset();
        
        
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
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
                        <input required id="name" name="clientName" type="text" className={`form-control ${this.errorClass(this.state.formErrors.clientName)}`} onChange={this.handleChange}/>
                    </label>
                </div>
                {/*<div className={'${this.errorClass(this.state.formErrors.clientEmail)'}>*/}
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
                        <input id="houseAge" name="clientHouseAge" type="text" className="form-control" 
                        value = {this.state.clientHouseAge}
                        onChange= {(event) => {this.handleChange(event)}}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <p>
                        Do you know the problem with your tap water?
                    </p>
                        <label class = 'no'>
                            No {' '}
                            <input name="knowProb"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label class = 'no' >
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
                        <label class = 'no'>
                            No {' '}
                            <input name="anotherProb"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label class = 'no'>
                            Yes {' '}
                            <input name="anotherProb" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>
                <div className="form-group">
                    <p>
                    Are you interested in having your water tested?
                    </p>
                        <label class = 'no'>
                            No {' '}
                            <input name="waterTesting"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label class = 'no'>
                            Yes {' '}
                            <input name="waterTesting" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>

                <div className="form-group">
                <label>
                    How much do you care about the quality of your tap water?
                <select name="clientCare" onChange={this.handleChange}>
                    <option value="1">1 (not very much)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (very much)</option>
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
                    <label class = 'questions'>
                        Questions:
                        <textarea id="question" name="clientQuestion" className="form-control" onChange={this.handleChange}></textarea>
                    </label>
                </div>

                <button className="btn btn-success" disabled={!this.state.formValid}>submit</button>
            </form>


        );
    }
}
 
export default Form;
