import React, { Component } from 'react'
import {FaHtml5,FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaRProject} from "react-icons/fa";
import {DiBackbone} from "react-icons/di";
import {SiCplusplus, SiArangodb, SiMongodb, SiOracle, SiDjango} from "react-icons/si";

class Skills extends Component {
  render() {
    return (
      <>
        {/* <!-- START PORTFOLIO --> */}
        <section id="portfolio" className="tm-portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce">
                <div className="title">
                  <h2 className="tm-portfolio-title">My <strong>SKILLS</strong></h2>
                </div>

                {/* <!-- START ISO SECTION --> */}
                <div className="iso-section">
                  <div className="container-fluid">
                    <div className="row feature-box-row"  >
                      <div className="col-md-4" >
                        <div className="feature-box" >
                          <h6 className="heading-tertiary u-margin-bottom-small"><b>PROGRAMMING LANGUAGES</b></h6>
                          <ul>
                            <li><FaPython />Python</li>
                            <li><SiCplusplus />C++</li>
                            <li><FaRProject />R </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4" >
                        <div className="feature-box">
                          <h6 className="heading-tertiary u-margin-bottom-small"><b>WEB DEVELOPMENT</b></h6>
                          <ul>
                              <li><FaHtml5 /> HTML5</li>
                              <li><FaCss3Alt /> CSS3</li>
                              <li><FaJs /> JavaScript</li>
                              <li><FaReact /> React Js</li>
                              <li><FaNodeJs /> Node Js</li>
                              <li><SiDjango /> Django </li>
                              <li><DiBackbone />BackBone Js</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="feature-box" >
                          <h6 className="heading-tertiary u-margin-bottom-small"><b>DATABASE SERVICES</b></h6>
                          <ul>
                            <li><SiOracle /> Oracle </li>
                            <li><SiMongodb /> MongoDB </li>
                            <li><SiArangodb /> ArangoDB </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END PORTFOLIO --> */}
      </>
    )
  }
}

export default Skills
