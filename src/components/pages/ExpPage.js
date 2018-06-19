import React, {Component} from 'react';
import {Card, Image, Icon, Header, Divider, Modal, Button} from 'semantic-ui-react';

export default class ExpPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			rowItems:3
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
		const title1 = 'McGill Clinical & Health Informatics';
		const role1 = 'Software Developer Intern';
		const dura1 = 'Ongoing since May 2018';
		const title2 = 'Gammon Construction Limited';
		const role2 = 'Information Management Services Intern';
		const dura2 = 'May 2017 - August 2017';
		const title3 = 'TOM Condominiums';
		const role3 = 'Data Management Administrator';
		const dura3 = 'May 2016 - April 2017';
		const title4 = 'TigerCub Learning';
		const role4 = 'Software Developer Intern';
		const dura4 = 'May 2015 - August 2015';
		const title5 = 'MAESTRA Project';
		const role5 = 'Undergraduate Research Assistant';
		const dura5 = 'Ongoing since January 2018';


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
				<Modal trigger={<Card>
					<Image src={img_WE1} className='card-img'/>
					<Card.Content>
						<Card.Header>{title1}</Card.Header>
						<Card.Meta>{role1}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura1}
					</Card.Content>					
				</Card>} closeIcon>
					<Modal.Header>{title1}</Modal.Header>
					<Modal.Content image>
					  <Image wrapped size='medium' src={img_WE1} />
					  <Modal.Description>
					    <Header>{role1}</Header>
					    <p>TODO</p>
					  </Modal.Description>
					</Modal.Content>
				    <Modal.Actions>

					</Modal.Actions>	
				</Modal>
				<Modal trigger={<Card>
					<Image src={img_WE2} className='card-img'/>
					<Card.Content>
						<Card.Header>{title2}</Card.Header>
						<Card.Meta>{role2}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura2}
					</Card.Content>					
				</Card>} closeIcon>
					<Modal.Header>{title2}</Modal.Header>
					<Modal.Content image>
					  <Image wrapped size='medium' src={img_WE2} />
					  <Modal.Description>
					    <Header>{role2}</Header>
					    <p>TODO</p>
					  </Modal.Description>
					</Modal.Content>
					<Modal.Actions>
				  
					</Modal.Actions>	
				</Modal>
				<Modal trigger={<Card>
					<Image src={img_WE3} className='card-img'/>
					<Card.Content>
						<Card.Header>{title3}</Card.Header>
						<Card.Meta>{role3}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura3}
					</Card.Content>					
				</Card>} closeIcon>
					<Modal.Header>{title3}</Modal.Header>
					<Modal.Content image>
					  <Image wrapped size='medium' src={img_WE3} />
					  <Modal.Description>
					    <Header>{role3}</Header>
					    <p>TODO</p>
					  </Modal.Description>
					</Modal.Content>
					<Modal.Actions>
				  
					</Modal.Actions>	
				</Modal>
				<Modal trigger={<Card>
					<Image src={img_WE4} className='card-img'/>
					<Card.Content>
						<Card.Header>{title4}</Card.Header>
						<Card.Meta>{role4}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura4}
					</Card.Content>					
				</Card>} closeIcon>
					<Modal.Header>{title4}</Modal.Header>
					<Modal.Content image>
					  <Image wrapped size='medium' src={img_WE4} />
					  <Modal.Description>
					    <Header>{role4}</Header>
					    <p>TODO</p>
					  </Modal.Description>
					</Modal.Content>
					<Modal.Actions>
				  
					</Modal.Actions>	
				</Modal>												
				</Card.Group>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='lightbulb' circular />
		  			<Header.Content>Projects</Header.Content>
		  		</Divider>
				</Header>
				<Card.Group centered itemsPerRow={this.state.rowItems}>
				<Modal trigger={<Card>
					<Image src={img_P1} className='card-img'/>
					<Card.Content>
						<Card.Header>{title5}</Card.Header>
						<Card.Meta>{role5}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura5}
					</Card.Content>					
				</Card>} closeIcon>
					<Modal.Header>{title5}</Modal.Header>
					<Modal.Content image>
					  <Image wrapped size='medium' src={img_P1} />
					  <Modal.Description>
					    <Header>{role5}</Header>
					    <p>TODO</p>
					  </Modal.Description>
					</Modal.Content>
					<Modal.Actions>
				  
					</Modal.Actions>	
				</Modal>
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

