import React, { Component } from 'react';
class Navbars extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (  
            <li><a href={"#"+this.props.NavObj.id} className = {this.props.className} onClick = {()=> this.props.clickHandle(this.props.NavObj.id)}><i className={this.props.NavObj.class}></i> <em>{this.props.NavObj.Name}</em></a></li>
        );
    }
}
 
export default Navbars;