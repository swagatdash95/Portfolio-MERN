import './css/App.css';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/fontAwesome.css';
import './css/fontawesome-free/css/all.css';
import './css/light-box.css';
import './css/templatemo-main.css';
import NavbarLists from './Components/NavbarLists';
import Slides from './Components/Slides';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      windowWidth : '0px'
     }
    this.slideSetter = this.slideSetter.bind(this);
  }
  NavObjects = [{"id":"1","Name":"Home","class":"fa fa-home"},
  {"id":"2","Name":"About","class":"fa fa-user"},
  {"id":"3","Name":"Projects","class":"fa fa-tasks"},
  {"id":"4","Name":"Tech Stack","class":"fa fa-code"},
  {"id":"5","Name":"Let's connect","class":"fa fa-envelope"}];

  slideSetter = (id) => {
    this.setState({
      windowWidth : (id-1)*window.screen.width+'px'
    })
  }

  render() { 
    return ( 
      <div className="App">
        <NavbarLists Navobjects = {this.NavObjects} slideSetter = {this.slideSetter} />
        <Slides windowWidth = {this.state.windowWidth}/>
      </div>
     );
  }
}

export default App;
