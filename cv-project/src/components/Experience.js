import React, { Component } from "react"

class Experience extends Component {
    constructor() {
        super(); 
        this.state = {
            occupation: "",
            employer: "",
            from: "",
            to: "",
            description: ""
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
        return (
            <div className="experience-form">
            <h2>Work Experience</h2>
            <form>
                <div>
                    <input 
                        type='text' 
                        id='occupation' 
                        placeholder="Occupation"
                        name="occupation"
                        value={this.state.occupation}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type='text' 
                        id='employer' 
                        placeholder="Employer"
                        name="employer"
                        value={this.state.employer}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="date">
                    <div className="from">
                        <label htmlFor="from">From: </label>
                        <input 
                            type='date' 
                            id='from' 
                            placeholder="From"
                            name="from"
                            value={this.state.from}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input 
                            type='date' 
                            id='to' 
                            placeholder="To"
                            name="to"
                            value={this.state.to}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <textarea
                        rows="6" 
                        cols="50"
                        id='description' 
                        placeholder="Job Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </div>
            </form>
      </div>
        )
    }
}

export default Experience;