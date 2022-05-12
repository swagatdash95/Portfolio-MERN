import React, { Component } from 'react'
import prof from '../../images/prof.jpeg';

export default class Home extends Component {
  render() {
    return (
      <>
        {/* <!-- START HOME --> */}
        <section id="home" className="templatemo-home">
          <div className="container" style = {{'paddingTop':'10%'}}> 
            <div className="row">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-9 col-sm-10">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img src={prof} className="prof-img" style = {{"height":"200px","width":"200px","opacity":"0.9", "borderRadius":"150px", "border": "3px solid #eb5424"}}alt="profile img" />
                  </div>
                  <div className="col-md-9 col-sm-10 my-auto">
                    <h1 className="tm-home-title"><strong><span style = {{"color":"#bfbfbf"}}>Swagat </span>Dash</strong></h1>
                    <h2 className="tm-home-subtitle">Computer Science Enthusiast</h2>
                  </div>
                </div>
                <p style = {{"color":"#bfbfbf"}}> A Computer Science Enthusiast deriving satisfaction by solving real world problems using modern technologies. 
                Eager to contribute in building cutting edge solutions to make lives easier. I have had work experience in 
                <strong> Web Development</strong> creating and maintaining web application as a <strong>Full-Stack Developer</strong> and currently pursuing MS in <strong>Data Science</strong> from Trinity College, Dublin. 
                <br /> <br /><span className = "tm-tag-line">Happy to Contribute. Eager to learn. Thank You!</span></p>
                <a href="#work" className="btn btn-default smoothScroll tm-view-more-btn">Let's Begin</a>
              </div>
              <div className="col-md-2 col-sm-1"></div>
            </div>
          </div>
        </section>
        {/* <!-- END HOME --> */}
      </>
    )
  }
}
