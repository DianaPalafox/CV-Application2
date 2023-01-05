import React, { Component } from "react"

class CVExperience extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { form } = this.props;
        return(
            <div>
            <div className="CV-content">
            <div className="ExperienceCV">  
                <h2>Experience</h2>
                <h2>{form.occupation}</h2>
                <h2>{form.employer}</h2>
                <span>{form.from2}</span> -
                <span>{form.to2}</span>
                <h4>{form.description}</h4>
            </div>
            </div>
        </div>
        )
    }
}

export default CVExperience