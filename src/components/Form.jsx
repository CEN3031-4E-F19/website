import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            clientEmail: '',
            clientHouseAge: '',
            clientAddress: '',
            problem: false,
            knowProb: 'No',
            clientQuestion: '',
            problemDesc: ''
          };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});

    }

    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input id="name" name="clientName" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input id="email" name="clientEmail" type ="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input id="address" name="clientAddress" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        House Age:
                        <input id="houseAge" name="clientHouseAge" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <p>
                        Do you know the problem with your Water?
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
                    {this.state.knowProb==="Yes"? <label> Please describe your problem<input name ="problemDesc"type="text" onChange={this.handleChange}/></label>:
                    <span/>}
                </div>
                <div className="form-group">
                    <label>Please upload any relevent information
                        <input type="file"/>                        
                    </label>

                </div>
                <div className="form-group">
                    <label>
                        Questions:
                        <input id="question" name="clientQuestion" type="text" onChange={this.handleChange}></input>
                    </label>
                </div>

                <button>submit</button>
            </form>


        );
    }
}
 
export default Form;