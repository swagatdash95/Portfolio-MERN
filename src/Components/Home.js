import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="slide">
        <div className="content first-content">
          <div className="container-fluid first-content-intro">
            {/*<h1 className = "watermark-class">Hi!</h1>*/}
            <div className = "row">
              <div className="col-md-3">
                <CSSTransition in={true} timeout={{appear: 5500,enter: 1300,exit: 1500,}} classNames="photo-transition" appear = {true}>
                  <div className="author-image"><img src="/img/author_image.png" alt="Author" /></div>
                </CSSTransition>
              </div>
              <div className="col-md-8" style = {{'top':'11vh'}}>
                <CSSTransition in={true} timeout={1000} classNames="name-transition" appear = {true}>
                  <h2>Swagat Dash</h2> 
                </CSSTransition>
                <br/>
                <CSSTransition in={true} timeout={1000} classNames="title-transition" appear = {true}>
                    <h3>Software Developer</h3>
                </CSSTransition>
              </div>
              <div className="col-md-1" style = {{'top':'16vh'}}>
                <CSSTransition in={true} timeout={3000} classNames="arrow-transition" appear = {true}>
                  <i className="fas fa-arrow-circle-right" style={{'fontSize':'49px','color':'#ffc800'}}></i>
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div> );
    }
}
 
export default Home;