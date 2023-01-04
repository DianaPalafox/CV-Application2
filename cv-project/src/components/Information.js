import React, { Component } from "react"

class Information extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const { onChange, form} = this.props
        return(
            <div className="information-form">
            <h2>General Information</h2>
            <form>
                <div>
                    <input 
                        name='firstName' 
                        type='text' 
                        id='firstName' 
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={onChange}
                    />
                    <input 
                        name='lastName' 
                        type='text' 
                        id='lastName' 
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input 
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder="Email"
                        value={form.email}
                        onChange={onChange}
                    />
                    <input 
                        name='tel' 
                        type='tel' 
                        id='tel' 
                        placeholder="Phone Number"
                        value={form.tel}
                        onChange={onChange}
                    />
                </div>
            </form>
        
      </div>
        )
    }
}

export default Information