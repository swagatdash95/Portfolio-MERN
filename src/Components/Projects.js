import React, { Component } from 'react';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="slide">
                    <div className="content third-content">
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className = "row">
                                    <h1>PROJECTS</h1>
                                </div>
                                <div className="row">
                                    <div className="first-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-content">
                                                        <h2>IoT - Smart Automated Home</h2>
                                                        <p>This was my graduation project. This aimed at enabling users to control the electrical and electrnonic appiliances remotely. It was achieved using an Arduino Microcontroller coupled with a multi-node Relay module. It would also notify users of fire and theft at their homes in their absence. Which was done using sensors like DH11 and PIR motion sensor. The data was being fed into online platform dweet.io and in turn would get projected into a website built using Joomla framework.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-image">
                                                        <img src="../img/first_service.jpg" alt="first service" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="second-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-image">
                                                        <img src="../img/second_service.jpg" alt="second service" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-content">
                                                        <h2>Accessibility</h2>
                                                        <p>Worked on making the MetricStream Product (M7 App) accessibility compliant. Converted most of the non-semantic HTML tags to semantic ones, keeping the UI behavior intact. Added and handled event-driven Tab indexes to all the interactive elements. Every element was assigned appropriate Roles to be identified by Screen Readers. The product went on to get WCAG Level AA certification.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="third-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-content">
                                                        <h2>Cross Referencing <br />(MS - Office Integration)</h2>
                                                        <p> Worked on using the components of word files (Bookmarks / Headings) as references in Form fields. Used Java Apache POI library to scan the components and store the same in DB. The references can later be imported to form fields as links, which opens the Doc using appropriate Office URI schemes and highlights the exact component used for reference (Done using <em><a href = "https://docs.microsoft.com/en-us/office/dev/add-ins/word/word-add-ins-programming-overview">MS-Word Add-in</a></em> built in React <i className="fab fa-react"></i>). </p>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-image">
                                                        <img src="../img/third_service.jpg" alt="first service" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fourth-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-image">
                                                        <img src="../img/fourth_service.jpg" alt="second service" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-content">
                                                        <h2>Portfolio - MERN Stack</h2>
                                                        <p>This is my portfolio project, which we are at now. I used MERN Stack to build this project. The front-end is a React project and the Database is MongoDB. Whereas, Node and Express being the API and Web Server.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default Projects;