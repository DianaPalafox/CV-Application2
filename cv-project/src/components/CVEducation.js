import React, { Component } from "react"

class CVEducation extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { education } = this.props;
        return(
            <div>
            <div className="CV-content">
            <div className="EducationCV">  
                <h2>Education</h2>
                <h2>{education.university}</h2>
                <h2>{education.title}</h2>
                <span>{education.from}</span> -
                <span>{education.to}</span>
            </div>
            </div>
        </div>
        )
    }
}

export default CVEducation