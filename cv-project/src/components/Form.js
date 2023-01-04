import React, { Component } from "react"
import Education from "./Education"
import Information from "./Information"
import Experience from "./Experience"
import CV from "./CV"

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            form:{
                firstName: "",
                lastName: "",
                email: "",
                tel: "",
                title: "",
                university: "",
                from: "",
                to:"",
                occupation: "",
                employer: "",
                from2: "",
                to2: "",
                description: ""
            }
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {name, value} = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
          });
    }

    render() {
        return(
          <div className="Container">
          <div className='Form'>
          <div className='Content'>
            <Information 
                onChange={this.handleInputChange}
                form={this.state.form}
            />
            <Education 
                onChange={this.handleInputChange}
                form={this.state.form}
            />
            <Experience 
                onChange={this.handleInputChange}
                form={this.state.form}
            />
          </div> 
        </div>
        <div className="CV">
          <CV form={this.state.form}/>
        </div>
      </div>
        )
    }
}

export default Form;