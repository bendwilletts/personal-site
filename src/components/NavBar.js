import React, { Component } from 'react';
import {Menu, Image} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {
	//       activeItem: 'profile',
	//       loading: true,
	//       messages: [],
 //    	};
 //  	}
	state={};
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const logo = require('../images/logo.png');
		const { activeItem } = this.state;
		return (
	      <Menu>
	        <Menu.Item header className='logoImg'><Image src={logo} size='tiny'/></Menu.Item>
	        <Menu.Item position='right' as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={(this.handleItemClick)} />
	        <Menu.Item as={NavLink} to='/portfolio' name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
	        {/*<Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />*/}
	      </Menu>			
		);
	}
}
