import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <>
        {/* <!-- START ABOUT --> */}
        <section id="about" className="tm-about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-7" style = {{marginLeft:"50%", width:"50%"}}>
                <div className="title">
                  <h1 className="tm-red-text">This is<strong> Me</strong></h1>
                </div>
                <div class = 'about-content'>
                  <p>I am a dreamer, a believer and a passion driven Computer Science Engineer, who hails from Sundargarh, Odisha, India.</p>
                  <p>Journey so far has been very rewarding. Plan is to keep learning and keep growing. After all, there is nothing like pursuing your passion professionally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END ABOUT --> */}
      </>
    )
  }
}

export default About
