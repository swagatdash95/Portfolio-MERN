import React, { Component } from 'react'
import crossRef from '../../images/cross_ref.jpg'
import accessibility from '../../images/accessibility.jpeg'
import mern from '../../images/MERN.jpeg'
import commute from '../../images/commute.jpeg'
import dublinBikes from '../../images/dublin_bikes.jpeg'
import marsRover from '../../images/mars_rover.jpeg'
import captchas from '../../images/captchas.png'
import paintSplat from '../../images/paint_splat.jpg'
import sustainableCity from '../../images/sustainable_city.jpeg'

class Projects extends Component {
  render() {
    return (
      <>
        {/* <!-- START work --> */}
        <section id="work" className="tm-padding-top-bottom-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-11">
                        <h2 className="title">My <strong>Projects</strong></h2>						
                    </div>
                </div>
                <div className="row project-row">
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> This project was aimed to build a Machine Learning model that can predict the commute speed between any two areas in a city on any day of the week at any given time. In addition, we wanted to analyse the most important factors affecting the speed of commute in different cities. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {commute} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3">COMMUTE SPEED PREDICTION IN MAJOR CITIES</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> Using a time series data set of dublin bikes, implemented Ridge Regression and Random forest regressor models to predict bike station occupancy 10 mins, 20 mins, 60 mins in the future.</p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {dublinBikes} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3">TIME SERIES ANALYSIS ON DUBLIN BIKES TO PREDICT BIKE AVAILABILITY</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> The objective of this project was to design, implement and build a peer-to-peer network in the context of Mars rovers. Built a Software Defined Network to simulate wireless communication within rovers having a highly dynamic topology. Implemented Leader Election Protocol (Bully Algorithm) to elect a leader dynamically for each network to facilitate inter and intra network communication. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {marsRover} className = "project-image" />
                            <h3 className="text-uppercase tm-work-h3">IOT BASED DISTRIBUTED P2P NETWORK IMPLEMENTATION USING RASPBERRY PIs TO MIMIC MARS ROVERS</h3>
                        </div>
                    </div>
                </div>
                <div className="row project-row">
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> Generated random variable length image captchas using the python captcha library and trained a tensorflow model. Converted the tf model to a tflite model and shipped it to raspberry pi (Constrained Environment) using SSH and did prediction of captchas on a test set after reducing noise through image processing. Model gave high (95%) accuracy when tested on a hidden test set. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {captchas} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3">CAPTCHA RECOGNITION USING MACHINE LEARNING IN RASPBERRY PI</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> We used React-native for front end and Django for the backend development. Realtime interconnection between players was handled using AWS IoT core which maintained a pub/sub queue and all the players were the publisher as well as subscriber to the same queue. Concurrency control was handled through a AWS lambda function using timestamp and the conflict resolution was done in the runtime. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {paintSplat} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3"> PAINT SPLAT MULTIPLAYER GAME USING REACT NATIVE, DJANGO and AWS</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p>The goal of this project was to provide a decision-support tool for city managers to optimise mobility service delivery. A dashboard was implemented using Django, React and AWS components to provide information about real time volume of usage and other information about Rail/ Luas/ Traffic etc., and potential areas of over- or under-use. The dashboard was able to recommend city managers about moving entities around the city based on a ML prediction model built on past time-series data. It would forecast how busy/quiet different zones of the city are expected to be in the next 24 hours.</p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {sustainableCity} className = "project-image" />
                            <h3 className="text-uppercase tm-work-h3">SUSTAINABLE CITY MANAGEMENT DASHBOARD</h3>
                        </div>
                    </div>
                </div>
                <div className="row project-row">
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> Worked on using the components of word files (Bookmarks / Headings) as references in Form fields. Used Java Apache POI library to scan the components and store the same in DB. The references can later be imported to form fields as links, which opens the Doc using appropriate Office URI schemes and highlights the exact component used for reference (Done using <em><a href="https://docs.microsoft.com/en-us/office/dev/add-ins/word/word-add-ins-programming-overview">MS-Word Add-in</a></em> built in React <i class="fab fa-react"></i>). </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {crossRef} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3">CROSS REFERENCING <br />(MS - OFFICE INTEGRATION)</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> Worked on making the MetricStream Product (M7 App) accessibility compliant. Converted most of the non-semantic HTML tags to semantic ones, keeping the UI behavior intact. Added and handled event-driven Tab indexes to all the interactive elements. Every element was assigned appropriate Roles to be identified by Screen Readers. The product went on to get WCAG Level AA certification. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {accessibility} className = "project-image"/>
                            <h3 className="text-uppercase tm-work-h3">ACCESSIBILITY</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 work-container" style = {{position:'relative'}}>
                        <div className="work-content">
                            <p> This is my portfolio project, which we are at now. I have used MERN Stack to build this project. The front-end is a React project and the Database is MongoDB. The UI build is done using webpack, with babel being the jsx loader. Whereas, Node and Express have been used as the API and Web Server. Project deployment has been done to heroku cloud platform whose DNS targets have been used to forward my custom domain using CName records. </p>
                        </div>
                        <div className="work-wrapper">
                            <img src = {mern} className = "project-image" />
                            <h3 className="text-uppercase tm-work-h3">PORTFOLIO</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <!-- END work --> */} 
      </>
    )
  }
}

export default Projects
