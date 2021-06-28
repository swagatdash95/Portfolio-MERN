import React, { Component } from 'react';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="slide">
                <div className="content second-content">
                    <div className="container-fluid">
                        <div className="col-md-6">
                            <div className="left-content">
                                <h2>About Me</h2>
                                <p>I am a dreamer, a believer and a passion driven Software Engineer, who hails from Sundargarh, Odisha.<br /><i className="fas fa-school"></i> : Ex-KVian  |  <i className="fas fa-university"></i> : Former Dipsite  |  <i className="fa fa-user-graduate"></i> : CVRCE, Bhubaneswar | <i className ="fas fa-laptop-code"></i> : MetricStream-ing thesedays </p> 
                                <p>A full stack developer with interest and experience on both client side as well as server side technologies. </p>
                                <p>Eager to add the Data Science domain to my skillset. To be able to implement Machine Learning algorithms while operating on BigData is certainly the next one to check off the list.</p>
                                <p>Journey so far has been very rewarding. Plan is to keep learning and keep growing. After all, there is nothing like pursuing your passion professionally <i className="fas fa-smile-wink"></i> </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="img/about_image.jpg" alt="about_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;