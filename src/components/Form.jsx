import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            ageHouse: '',
            address: '',
            problem: false,
            knowProb: 'No',
            questions: '',
          };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleAddressChange=this.handleAddressChange.bind(this);
        this.handleAgeChange=this.handleAgeChange.bind(this);
        this.handleQuestionChange=this.handleQuestionChange.bind(this);
        this.handleKnowProb=this.handleKnowProb.bind(this);
    }

    handleNameChange(event){
        this.setState({name:event.target.value});
    }

    handleEmailChange(event){
        this.setState({email:event.target.value});
    }

    handleAddressChange(event){
        this.setState({address:event.target.value});
    }
    handleAgeChange(event){
        this.setState({houseAge:event.target.value});
    }
    handleQuestionChange(event){
        this.setState({questions:event.target.value});
    }

    handleKnowProb(event){
        this.setState({knowProb:event.target.value})
        console.log(this.state.knowProb)
    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input id="name" type="text" onChange={this.handleNameChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input id="email" type ="text" onChange={this.handleEmailChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <input id="address" type="text" onChange={this.handleAddressChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        House Age:
                        <input id="houseAge" type="text" onChange={this.handleAgeChange}></input>
                    </label>
                </div>
                <div>
                    <p>
                        Do you know the problem with your Water?
                    </p>
                        <label>
                            No {' '}
                            <input name="knowProb"type="radio" value="No" defaultChecked onClick={this.handleKnowProb}></input>
                        </label>
                        <label className ="m-2">
                            Yes {' '}
                            <input name="knowProb" type="radio" value="Yes" onClick={this.handleKnowProb}></input>
                        </label>

                </div>
                <div>
                    {this.state.knowProb==="Yes"? <input type="text"></input>:<span/>}
                </div>
                <div>
                    <label>
                        Questions:
                        <input id="question" type="text" onChange={this.handleQuestionChange}></input>
                    </label>
                </div>

                <button>submit</button>
            </form>


        );
    }
}
 
export default Form;