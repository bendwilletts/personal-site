import React, {Component} from 'react';
import {Card, Image, Icon, Header, Divider} from 'semantic-ui-react';

export default class ExpPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			rowItems: 3
		};
	}
	
   /**
   * Add event listener
   */
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	/**
	* Remove event listener
	*/
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	updateDimensions() {
	    if(window.innerWidth < 500) {
	      this.setState({rowItems:1});
	    }
	    else if(window.innerWidth < 991 && window.innerWidth >= 500){
			this.setState({rowItems:2});
	    }else{
	      this.setState({rowItems:3});
	    }
  	}
	render() {
		const img_WE1 = require('../../images/infolaptop.png');
		const img_WE2 = require('../../images/hongkong.png');
		const img_WE3 = require('../../images/tomcondos.png');
		const img_WE4 = require('../../images/learning.png');
		const img_P1 = require('../../images/ultrasound.png');
		return(
			<div>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='comment alternate' circular />
		  			<Header.Content>Endorsements</Header.Content>
		  		</Divider>
				</Header>

				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='briefcase' circular />
		  			<Header.Content>Work Experience</Header.Content>
		  		</Divider>
				</Header>
				<Card.Group centered itemsPerRow={this.state.rowItems}>
				<Card >
					<Image src={img_WE1} className='card-img'/>
					<Card.Content>
						<Card.Header>McGill Clinical & Health Informatics</Card.Header>
						<Card.Meta>Software Developer Intern</Card.Meta>
						<Divider fitted />
						<Card.Description className='card-desc'>
							<p>
								At MCHI, my role was to m
							</p>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							Ongoing since May 2018
					</Card.Content>					
				</Card>
				<Card >
					<Image src={img_WE2} className='card-img'/>
					<Card.Content>
						<Card.Header>Gammon Construction Limited</Card.Header>
						<Card.Meta>Information Management Services Intern</Card.Meta>
						<Divider fitted />
						<Card.Description className='card-desc'>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							May 2017 - August 2017
					</Card.Content>
				</Card>
				<Card >
					<Image src={img_WE3} className='card-img'/>
					<Card.Content>
						<Card.Header>TOM Condominiums</Card.Header>
						<Card.Meta>Data Management Administrator</Card.Meta>
						<Divider fitted />
						<Card.Description className='card-desc'>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							May 2016 - April 2017
					</Card.Content>
				</Card>	
				<Card >
					<Image src={img_WE4} className='card-img'/>
					<Card.Content>
						<Card.Header>TigerCub Learning</Card.Header>
						<Card.Meta>Software Developer Intern</Card.Meta>
						<Divider fitted />
						<Card.Description className='card-desc'>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							May 2015 - August 2015
					</Card.Content>
				</Card>													
				</Card.Group>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='lightbulb' circular />
		  			<Header.Content>Projects</Header.Content>
		  		</Divider>
				</Header>
				<Card.Group centered itemsPerRow={this.state.rowItems}>
				<Card>
					<Image src={img_P1} className='card-img'/>
					<Card.Content>
						<Card.Header>MAESTRA Project</Card.Header>
						<Card.Meta>Ongoing since January 2018</Card.Meta>
						<Card.Description className='card-desc'>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name='user' />
							10 Friends
						</a>
					</Card.Content>
				</Card>
				</Card.Group>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='code' circular />
		  			<Header.Content>Skills</Header.Content>
		  		</Divider>
				</Header>
				<Card fluid>
					<Image src='/assets/images/avatar/large/daniel.jpg' />
					<Card.Content>
						<Card.Header>Programming Languages</Card.Header>
						<Card.Meta>TODO</Card.Meta>
						<Card.Description>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name='user' />
							10 Friends
						</a>
					</Card.Content>
				</Card>				
			</div>
		)
	}
};

