import React, { Component,PureComponent } from 'react';
import Home from './Home.js';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Connect from './Connect';
const Slides = (props) => {
    return(
        <div className="slides" style = {{transform:'translate(-'+props.windowWidth+')'}}>
                <Home />
                <About />
                <Projects />
                <TechStack />
                <Connect />
        </div> 
    );
}

 
export default Slides;