import React, { Component } from "react"

class CV extends Component{
    render() {
        return(
            <div>
            <div className="CV-content">
            <div className="InformationCV">  
                <h1>First Name:</h1>
                <h1>Last Name:</h1>
                <div className="personal-details">
                    <h4>Personal Details:</h4>
                    <h6>Email:</h6>
                    <h6>Tel:</h6>
            </div>
            </div>
            <div className="EducationCV">  
                <h1>Education:</h1>
                <h2>Degree:</h2>
                <h4>From:</h4>
                <h4>To:</h4>
            </div>
            <div className="ExperienceCV">  
                <h1>Experience:</h1>
                <h2>Occupation:</h2>
                <h2>Employer:</h2>
                <h4>From:</h4>
                <h4>To:</h4>
                <h4>Description:</h4>
            </div>
            </div>
        </div>
        )
    }
}

export default CV 