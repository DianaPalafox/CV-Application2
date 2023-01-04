import React, { Component } from "react"

class Experience extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        const { onChange, form} = this.props
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
                        value={form.occupation}
                        onChange={onChange}
                    />
                    <input 
                        type='text' 
                        id='employer' 
                        placeholder="Employer"
                        name="employer"
                        value={form.employer}
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
                            name="from2"
                            value={form.from2}
                            onChange={onChange}
                        />
                    </div>
                    <div className="to">
                        <label htmlFor="To">To: </label>
                        <input 
                            type='date' 
                            id='to' 
                            placeholder="To"
                            name="to2"
                            value={form.to2}
                            onChange={onChange}
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
                        value={form.description}
                        onChange={onChange}
                    />
                </div>
            </form>
      </div>
        )
    }
}

export default Experience;