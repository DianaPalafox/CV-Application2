import React, { Component } from "react"

class CVInfo extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { form } = this.props;
        return(
            <div>
            <div className="CV-content">
            <div className="InformationCV">  
                <span>{form.firstName}</span>
                <span> {form.lastName}</span>
                <div className="personal-details">
                    <h2>Personal Details</h2>
                    <h6>{form.email}</h6>
                    <h6>{form.tel}</h6>
            </div>
            </div>
            </div>
        </div>
        )
    }
}

export default CVInfo