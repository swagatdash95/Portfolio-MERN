import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="slide">
        <div className="content first-content">
          <div className="container-fluid">
              <div className="col-md-3">
                  <div className="author-image"><img src="/img/author_image.png" alt="Author" /></div>
              </div>
              <div className="col-md-9">
                  <h2>Swagat Dash</h2> <br/>
                  <h3>Software Developer</h3>
                  <p>Hey There!! Welcome to my portfolio. <br/> This notes down some insights of my professional venture and the journey so far.</p>
              </div>
          </div>
        </div>
      </div> );
    }
}
 
export default Home;