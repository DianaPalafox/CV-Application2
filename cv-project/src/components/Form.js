import React, { Component } from "react"
import Education from "./Education"
import Information from "./Information"
import Experience from "./Experience"
import CVInfo from "./CVInfo"
import CVEducation from "./CVEducation"
import CVExperience from "./CVExperience"

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            addEducationComponent: [{title: '', university: '', from: '', to: ''}],
            form:{
                firstName: "",
                lastName: "",
                email: "",
                tel: "",
                occupation: "",
                employer: "",
                from2: "",
                to2: "",
                description: ""
            }
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleEducationComponent() {
        this.setState((
            {
                addEducationComponent:[...this.state.addEducationComponent, {}],
            }
        ))
    }

    handleEducationChange(event, index){
        const {name, value} = event.target
        const comp = [...this.state.addEducationComponent];
        comp[index][name] = value;
        this.setState({comp})
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
            {this.state.addEducationComponent.map((item, index) => {
                return(
                    <Education 
                        key={index}
                        onChange={(event) => this.handleEducationChange(event, index)}
                        education={this.state.addEducationComponent}
                    />
                );
            })}
            <div className="add-form-button">
            <button onClick={()=>this.handleEducationComponent()} type="submit">
                Add More
            </button>
            </div>
            <Experience 
                onChange={this.handleInputChange}
                form={this.state.form}
            />
            <div className="add-form-button">
            <button type="submit">
                Add More
            </button>
            </div>
          </div> 
        </div>
        <div className="CV">
          <CVInfo form={this.state.form}/>
          {this.state.addEducationComponent.map((item, index) => {
                return(
                    <CVEducation 
                        key={index}
                        onChange={(event) => this.handleEducationChange(event, index)}
                        education={this.state.addEducationComponent}
                    />
                );
            })}
          <CVExperience form={this.state.form}/>
        </div>
      </div>
        )
    }
}

export default Form;