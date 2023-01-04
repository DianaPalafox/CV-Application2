import React, { Component } from "react"

class CV extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { form } = this.props;
        return(
            <div>
            <div className="CV-content">
            <div className="InformationCV">  
                <h1>First Name: {form.firstName}</h1>
                <h1>Last Name: {form.lastName}</h1>
                <div className="personal-details">
                    <h4>Personal Details:</h4>
                    <h6>Email: {form.email}</h6>
                    <h6>Tel: {form.tel}</h6>
            </div>
            </div>
            <div className="EducationCV">  
                <h1>Education</h1>
                <h2>University: {form.university}</h2>
                <h2>Degree: {form.title}</h2>
                <h4>From: {form.from}</h4>
                <h4>To: {form.to}</h4>
            </div>
            <div className="ExperienceCV">  
                <h1>Experience</h1>
                <h2>Occupation: {form.occupation}</h2>
                <h2>Employer: {form.employer}</h2>
                <h4>From: {form.from2}</h4>
                <h4>To: {form.to2}</h4>
                <h4>Description: {form.description}</h4>
            </div>
            </div>
        </div>
        )
    }
}

export default CV 