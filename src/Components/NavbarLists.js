import React, { Component } from 'react';
import Navbars from './Navbars.js';
class NavbarLists extends Component {
    constructor(props) {
        super(props);
        this.state = { activeId: "1" };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.setState({activeId : id}); 
        this.props.slideSetter(id);
    }

    render() { 
        return ( <nav>
                    <ul>
                        {this.props.Navobjects.map(NavObj =>
                            <Navbars key = {NavObj.id} NavObj = {NavObj} className = {this.state.activeId === NavObj.id?'active':''} clickHandle = {this.handleClick}/>
                        )}
                    </ul>
                </nav> 
                );
    }
}
 
export default NavbarLists;