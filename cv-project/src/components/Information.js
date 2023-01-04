import React, { Component } from "react"

class Information extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            tel: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
          });
    }

    render() {
        return(
            <div className="information-form">
            <h2>General Information</h2>
            <form>
                <div>
                    <input 
                        name='firstName' 
                        type='text' 
                        id='firstName' 
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        name='lastName' 
                        type='text' 
                        id='lastName' 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <input 
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        name='tel' 
                        type='tel' 
                        id='tel' 
                        placeholder="Phone Number"
                        value={this.state.tel}
                        onChange={this.handleInputChange}
                    />
                </div>
            </form>
        
      </div>
        )
    }
}

export default Information