import React, { Component } from "react"
import Education from "./Education"
import Information from "./Information"
import Experience from "./Experience"
import CV from "./CV"

class Form extends Component {
    render() {
        return(
          <div className="Container">
          <div className='Form'>
          <div className='Content'>
            <Information />
            <Education />
            <Experience />
          </div> 
        </div>
        <div className="CV">
          <CV />
        </div>
      </div>
        )
    }
}

export default Form;