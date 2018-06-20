import React, {Component} from 'react';
import {Image, Icon, Header, Modal, Button} from 'semantic-ui-react';

export default class ExpModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			// modalTitle:'',
			// modalSubTitle:'',
			// modalSummary:'',
			// modalImgPath: '',
			// modalNum:0,
			modalOpen:false
		};
	}
	// cardOnClick(title, role, image, num) {
	// 	this.setState({
	// 		modalTitle: title,
	// 		modalSubTitle: role,
	// 		modalImgPath: image,
	// 		modalNum: num,
	// 		modalOpen: true
	// 	});
	// }	

	// handleClose = () => this.setState({ modalOpen: false });

	// handleOpen = () => this.setState({modalOpen: true});

	render() {
		return(
			<Modal open={this.props.modalClick} onClose={this.props.handleClose} className='modal-container'>
			    <Modal.Header>{this.props.modalTitle}</Modal.Header>
				<Modal.Content image>
				  <Image wrapped size='medium' src={this.props.modalImgPath} />
				  <Modal.Description className='modal-desc'>
				    <Header>{this.props.modalSubTitle}</Header>
				    <p>{this.props.modalSummary}</p>
				  </Modal.Description>
				</Modal.Content>	
				<Modal.Actions>
					<a target='_blank' href={this.props.modalLink}>
					<Button secondary>
						More Info
					</Button>
					</a>
					<Button onClick={this.props.handleClose}>
						Back<Icon name='right chevron' />
					</Button>
				</Modal.Actions>
			</Modal>
			);
	}
}