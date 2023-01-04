import React, { Component } from "react"

class Education extends Component{
    constructor() {
        super();
        this.state = {
            title: "",
            university: "",
            from: "",
            to:"",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
          });
    }

    render() {
        return(
            <div className="education-form">
            <h2>Education</h2>
            <form>
                <div>
                    <input 
                        type='text' 
                        id='title' 
                        placeholder="Degree" 
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type='text' 
                        id='university' 
                        placeholder="University"
                        name="university"
                        value={this.state.university}
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
            </form>
      </div>
        )
    }

}

export default Education