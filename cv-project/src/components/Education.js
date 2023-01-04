import React, { Component } from "react"

class Education extends Component{
    constructor(props) {
        super(props);
    };

    render() {
        const { onChange, form} = this.props
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
                        value={form.title}
                        onChange={onChange}
                    />
                    <input 
                        type='text' 
                        id='university' 
                        placeholder="University"
                        name="university"
                        value={form.university}
                        onChange={onChange}
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
                            value={form.from}
                            onChange={onChange}
                        />
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input 
                            type='date' 
                            id='to' 
                            placeholder="To"
                            name="to"
                            value={form.to}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </form>
      </div>
        )
    }

}

export default Education