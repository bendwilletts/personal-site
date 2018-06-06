import React, {Component} from 'react';
import {Card, Image, Icon, Header, Divider} from 'semantic-ui-react';

export default class ExpPage extends Component {
	state = {};

	render() {
		return(
			<div>
				
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='briefcase' circular />
		  			<Header.Content>Work Experience</Header.Content>
		  		</Divider>
				</Header>

				<Card fluid>
					<Image src='/assets/images/avatar/large/daniel.jpg' />
					<Card.Content>
						<Card.Header>McGill Clinical & Health Informatics</Card.Header>
						<Card.Meta>Ongoing since May 2018</Card.Meta>
						<Card.Description>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name='user' />
							10 Friends
						</a>
					</Card.Content>
				</Card>

				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='lightbulb' circular />
		  			<Header.Content>Projects</Header.Content>
		  		</Divider>
				</Header>

				<Card fluid>
					<Image src='/assets/images/avatar/large/daniel.jpg' />
					<Card.Content>
						<Card.Header>MAESTRA Project</Card.Header>
						<Card.Meta>Ongoing since January 2018</Card.Meta>
						<Card.Description>TODO</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name='user' />
							10 Friends
						</a>
					</Card.Content>
				</Card>

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

