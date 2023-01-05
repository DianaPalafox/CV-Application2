import React, { Component } from "react"

class CVEducation extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { form } = this.props;
        return(
            <div>
            <div className="CV-content">
            <div className="EducationCV">  
                <h2>Education</h2>
                <h2>{form.university}</h2>
                <h2>{form.title}</h2>
                <span>{form.from}</span> -
                <span>{form.to}</span>
            </div>
            </div>
        </div>
        )
    }
}

export default CVEducation