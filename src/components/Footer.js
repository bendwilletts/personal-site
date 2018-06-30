import React, { Component } from 'react';
import {Menu, Icon, Divider} from 'semantic-ui-react';

export default class Footer extends Component {
	state={};
	
	render() {
		return (
			<div className='footer'>
				<Divider />
		      <Menu compact icon='labeled' className='footerLink'>
		      	<a href='https://github.com/bendwilletts' target="_blank">
		        <Menu.Item name='github'>
		          <Icon name='github'/>
		          GitHub
		        </Menu.Item>
		        </a>
		        <a href='https://www.linkedin.com/in/benwilletts1/' target="_blank">
		        <Menu.Item name='linkedin'  onClick={this.handleItemClick}>
		          <Icon name='linkedin' />
		          LinkedIn
		        </Menu.Item>
		        </a>
		        <a href='https://angel.co/bendwilletts' target="_blank">
		        <Menu.Item name='angellist' onClick={this.handleItemClick}>
		          <Icon name='angellist' />
		          AngelList
		        </Menu.Item>
		        </a>
		        <a href='https://www.facebook.com/bendwilletts' target="_blank">
		        <Menu.Item name='facebook' onClick={this.handleItemClick}>
		          <Icon name='facebook' />
		          Facebook
		        </Menu.Item>
		        </a>
		        <a href='mailto:ben.d.willetts@gmail.com?Subject=Website%20Contact' target="_top">
		        <Menu.Item name='email' onClick={this.handleItemClick}>
		          <Icon name='mail' />
		          E-mail
		        </Menu.Item>
		        </a>	        
		      </Menu>
		      <div className='copyright'>
	      		&#169; 2018 Ben Willetts
		      </div>
			</div>
		);
	}
}
