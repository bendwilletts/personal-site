import React, { Component } from 'react';
import {Menu, Image} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
	constructor(props) {
	    super(props);
	   	if(window.location.href.includes('portfolio')){
		    this.state = {
		      activeItem: 'portfolio'
	    	};
    	}else{
    		this.state = {
				activeItem: 'home'
    		};
    	}
  	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const logo = require('../images/logo.png');
		const { activeItem } = this.state;
		return (
	      <Menu>
	        <Menu.Item header className='logoImg'><Image src={logo} size='tiny'/></Menu.Item>
	        {
	        	this.state.activeItem ==='home'
	        	? <Menu.Item position='right' as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={(e) => e.preventDefault()} />
	        	: <Menu.Item position='right' as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={(this.handleItemClick)} />
	        }
	        {
	        	this.state.activeItem === 'portfolio'
	        	? <Menu.Item as={NavLink} to='/portfolio' name='portfolio' active={activeItem === 'portfolio'} onClick={(e) => e.preventDefault()} />
	        	: <Menu.Item as={NavLink} to='/portfolio' name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
	        }
{/*	        <Menu.Item position='right' as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={(this.handleItemClick)} />
	        <Menu.Item as={NavLink} to='/portfolio' name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />*/}
	        {/*<Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />*/}
	      </Menu>			
		);
	}
}
