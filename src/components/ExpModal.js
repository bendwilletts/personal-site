import React, {Component} from 'react';
import {Card, Image, Icon, Header, Divider, Modal, Button} from 'semantic-ui-react';

export default class ExpModal extends Component {
	constructor(props){
		super(props);
		this.cardOnClick = this.cardOnClick.bind(this);
		this.state = {
			modalTitle:'',
			modalSubTitle:'',
			modalSummary:'',
			modalImgPath: '',
			modalNum:0,
			modalOpen:false
		};
	}
	componentDidMount() {
	    this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(undefined);
	}

	cardOnClick(title, role, image, num) {
		this.setState({
			modalTitle: title,
			modalSubTitle: role,
			modalImgPath: image,
			modalNum: num,
			modalOpen: true
		});
	}

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return(
			<Modal open={this.state.modalOpen} onClose={this.handleClose()}>
			    <Modal.Header>Select a Photo</Modal.Header>
				<Modal.Content image>
				  <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
				  <Modal.Description>
				    <Header>Default Profile Image</Header>
				    <p>We've found the following gravatar image associated with your e-mail address.</p>
				    <p>Is it okay to use this photo?</p>
				  </Modal.Description>
				</Modal.Content>	
			</Modal>
			);
	}
}