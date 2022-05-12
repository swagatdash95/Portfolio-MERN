import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <>
        {/* <!-- START NAVIGATION --> */}
        <div className="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target="#rock-navigation">
                <span className="icon icon-bar"></span>
                <span className="icon icon-bar"></span>
                <span className="icon icon-bar"></span>
              </button>
              <a href="#" className="navbar-brand">Ultra Profile</a>
            </div>
            <nav className="collapse navbar-collapse" id="rock-navigation">
              <ul className="nav navbar-nav navbar-right main-navigation text-uppercase">
                <li><a href="#home" className="smoothScroll">Home</a></li>
                <li><a href="#work" className="smoothScroll">My Work</a></li>
                <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                <li><a href="#resume" className="smoothScroll">Resume</a></li>
                <li><a href="#about" className="smoothScroll">About</a></li>
                <li><a href="#contact" className="smoothScroll">Contact</a></li>
              </ul>
            </nav>

          </div>
        </div>
        {/* <!-- END NAVIGATION --> */}
      </>
    )
  }
}
