import React, {Component} from 'react';
import {Card, Image, Icon, Header, Divider, Label} from 'semantic-ui-react';
import {Carousel} from 'antd';
import ExpModal from '../ExpModal.js';

export default class ExpPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			rowItems:3,
			modalTitle:'',
			modalSubTitle:'',
			modalSummary:'',
			modalImgPath: '',
			modalClick:false,
			modalLink:''
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

  	handleOpen(event, title, role, num, img, link){
		let summary = '';
		if(num === 1){
			summary = (<div><p>I currently hold an integral role as part of the software development team at MCHI. The current focus is developing and deploying version 2.0 of a public health surveillance tool called PopHR. This web-based application uses existing epidemiological and public health knowledge and integrates multiple clinical data sources to provide a statistical view of the health of populations. The project currently covers the regions within Quebec, and is looking to expand nationwide within the next year. The main software tools include a heavy use of Javascript with jQuery and Polymer frameworks for the client-side and Jersey (Java) in combination with PostgreSQL for a RESTful architecture on the server-side.</p>
				<p>My main role is to lead the development of new modules to further describe the given data. The first steps require constant communication with leading researchers in public health to draw up requirements and mock-ups. Implementation is made on the front-end with a focus of rendering html elements in Javascript code in order to maintain a dynamic interface. Back-end implementation requires adding the necessary queries to gather and compute the server data. My team and I present the new working views in bi-weekly scrum meetings, where I point out any changes in design choices and problems to work around. The team maintains an agile workflow with JIRA as the main tool for task management.</p>
				<p>I am participating in a small but fulfilling team that provides me insights on all aspects of Full Stack Web Development. I am thoroughly enjoying the challenge of designing for a research tool meant to benefit society and the healthcare industry. The fast paced and coherent work environment is new and refreshing to me. I have gained a much broader knowledge of Javascript since I began, which I now realize is the most essential tool for modern websites. All the while garnering a deeper understanding of developing scalable server architectures for a large application.</p></div>)
		}
		else if(num === 2){
			summary = (<div><p>At Gammon Construction Limited, I worked as a summer trainee in the Information Management Services department. This department served as the software development division for the company. During my opportunity, the division focused on building enterprise applications to increase efficiency in the workplace and in their engineering projects. Our team of five engineers were tasked to create a workflow management web application to facilitate intercompany transactions. The main software tools include AngularJS 2 and jQuery frameworks for the front-end and Spring-booted Hibernate to serve as the back-end.</p>
				<p>My role as a developer trainee was to help build the server architecture and lead the designs of multiple user interface components for the application. The company promoted an agile development format and held monthly scrum meetings with the rest of the IMS division. In order to ensure that the product worked to help all departments within the company, I was tasked to communicate ideas and consider feedback from engineering and finance experts. These discussions helped me learn more about the company’s workflow and also helped me facilitate design choices for the application. Our team used SVN for version control and Slack for communication.</p>
				<p>Here at Gammon Construction Limited, I had the opportunity to work in a professional engineering company and experienced a fast paced and resourceful development process. It was also my first experience with agile methodologies and enterprise development. Overall, I learned a handful of valuable technologies and was able to pick the brains of senior developers to guide me forward.</p></div>)
		}
		else if(num === 3){
			summary = (<div><p>- Managed and maintained client data for luxury condo development</p>
				<p>- Updated and organized back-end of the company website</p>
				<p>- Created Excel templates to better manage client data and use for showroom presentations</p>
				<p>- Proposed and implemented online advertising solutions for real estate developments</p></div>)
		}
		else if(num === 4){
			summary = (<div><p>- Researched and supported the software development process for Android & iOS applications</p>
				<p>- Developed front-end software features for an early childhood education application</p>
				<p>- Integrated with back-end developers to display various learning tools and account data</p>
				<p>- Attended meetings with potential clients and industry experts to discuss software requirements</p></div>)
		}
		else if(num === 5){
			summary = (<div><p>- Developed a database management system linking clinical and fetal monitoring data</p>
				<p>- Analyzed fetal monitoring (EFM) signals to identify features that are predictive of HIE</p>
				<p>- Combined clinical and EFM data using machine learning methods to develop a perinatal HIE predictor</p>
				<p>- Completed a grant proposal with predictive results to submit to the National Institutes of Health (NIH)</p>
				<p>- Worked together with industry experts under the supervision of McGill’s Biomedical Engineering department</p></div>)			
		}
		else if(num === 6){
			summary = (<div><p>- Web mapping application that provides safest route to destination</p>
				<p>- Preprocessed NYC vehicle accident data into an incident frequency heat map using k-means clustering</p>
				<p>- Built server-side route suggestion engine via unsupervised machine learning and Google Maps API</p>
				<p>- Implemented various software features to enhance functionality, usability, and user experience</p>
				<p>- Winner of overall 1st place prize at CodeJam: Data Dive, total time 48 hours</p></div>)				
		}
		else if(num === 7){
			summary = (<div><p>- Recommendation engine for movies and television shows</p>
				<p>- Integrated k-NN machine learning algorithm with external datasets to provide accurate suggestions</p>
				<p>- Designed interactive web views with controller, combined with server-side features via Flask</p>
				<p>- Hackathon project submission for McGill Code.Jam() 2016, total time 48 hours</p></div>)			
		}
		else {
			summary = 'TODO'
		}
  		this.setState({
			modalTitle: title,
			modalSubTitle: role,
			modalSummary: summary,
			modalImgPath: img,
			modalClick: true,
			modalLink: link
  		});
  	}

  	handleClose = () => {
  		this.setState({modalClick: false});
  	}

	render() {

		const img_WE1 = require('../../images/infolaptop.png');
		const img_WE2 = require('../../images/hongkong.png');
		const img_WE3 = require('../../images/tomcondos.png');
		const img_WE4 = require('../../images/learning.png');
		const img_P1 = require('../../images/ultrasound.png');
		const img_P2 = require('../../images/nyc.png');
		const img_P3 = require('../../images/movie.png');

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
		const title6 = 'WalksafeNYC';
		const role6 = 'CodeJam: DataDive - Hackathon';
		const dura6 = 'November 2017';
		const title7 = 'Recommend & Chill';
		const role7 = 'McGill CodeJam - Hackathon';
		const dura7 = 'November 2016';

		const link1 = 'https://github.com/bendwilletts/pophr-ui';
		const link2 = 'https://www.gammonconstruction.com/en/html/front/index.html';
		const link3 = 'http://tomcondos.com/en/';
		const link4 = 'http://www.tigercublearning.com/en/';
		const link5 = 'https://www.dropbox.com/s/ztwl76c7th5pvw7/dp1-g07-finalreport.pdf?dl=0';
		const link6 = 'https://github.com/bendwilletts/WalksafeNYC';
		const link7 = 'https://github.com/bendwilletts/RecommendAndChill';


		// const summary1 = 'TODO';
		// const summary2 = 'TODO';
		// const summary3 = 'TODO';
		// const summary4 = 'TODO';
		// const summary5 = 'TODO';

		// if(this.state.modalTitle != '' && this.state.modalSubTitle != '' && this.state.modalSummary != '' && this.state.modalImgPath != '' && this.state.modalClick == true){
		// 	var modalComponent = <ExpModal modalTitle={this.state.modalTitle} modalSubTitle={this.state.modalSubTitle} modalSummary={this.state.modalSummary} modalImgPath={this.state.modalImgPath} modalClick={this.state.modalClick} handleClose={() =>this.handleClose}/> ;
		// } else {
		// 	var modalComponent = null;
		// }

		return(
			<div>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='comment alternate' circular />
		  			<Header.Content>Endorsements</Header.Content>
		  		</Divider>
				</Header>
				<Carousel vertical className='endorsements'>
				    <div className="quote-text">
				    	<h3>&#34;During his engagement with us, Ben demonstrated his self-initiation, diligence and commitment to work.&#34;</h3>
				    	<div align="right" className="quote-author">
				    		<p>- Horace Chu, Director &amp; CIO, Gammon Construction Limited</p>
				    	</div>
				    </div>
				    <div className="quote-text">
				    	<h3>&#34;Ben would add value to any company and I recommend him for any future endeavor he chooses to pursue.&#34;</h3>
				    	<div align="right" className="quote-author">
				    		<p>- Daniel Revah, President, TOM Condos</p>
				    	</div>
				    </div>
				    <div className="quote-text">
				    	<h3>&#34;Ben has proven himself a reliable and valuable member of the team who delivers on all expectations.&#34;</h3>
				    	<div align="right" className="quote-author">
				    		<p>- Horace Chu, Director &amp; CIO, Gammon Construction Limited</p>
				    	</div>
				    </div>
            	</Carousel>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='briefcase' circular />
		  			<Header.Content>Work Experience</Header.Content>
		  		</Divider>
				</Header>
				<Card.Group centered itemsPerRow={this.state.rowItems}>
				<Card onClick={(e) => this.handleOpen(e,title1,role1,1,img_WE1,link1)}>
					<Image src={img_WE1} className='card-img'/>
					<Card.Content>
						<Card.Header>{title1}</Card.Header>
						<Card.Meta>{role1}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura1}
					</Card.Content>					
				</Card>
				<Card onClick={(e) => this.handleOpen(e,title2,role2,2,img_WE2,link2)}>
					<Image src={img_WE2} className='card-img'/>
					<Card.Content>
						<Card.Header>{title2}</Card.Header>
						<Card.Meta>{role2}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura2}
					</Card.Content>					
				</Card>
				<Card onClick={(e) => this.handleOpen(e,title3,role3,3,img_WE3,link3)}>
					<Image src={img_WE3} className='card-img'/>
					<Card.Content>
						<Card.Header>{title3}</Card.Header>
						<Card.Meta>{role3}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura3}
					</Card.Content>					
				</Card>
				<Card onClick={(e) => this.handleOpen(e,title4,role4,4,img_WE4,link4)}>
					<Image src={img_WE4} className='card-img'/>
					<Card.Content>
						<Card.Header>{title4}</Card.Header>
						<Card.Meta>{role4}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura4}
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
				<Card onClick={(e) => this.handleOpen(e,title5,role5,5,img_P1,link5)}>
					<Image src={img_P1} className='card-img'/>
					<Card.Content>
						<Card.Header>{title5}</Card.Header>
						<Card.Meta>{role5}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura5}
					</Card.Content>					
				</Card>
				<Card onClick={(e) => this.handleOpen(e,title6,role6,6,img_P2,link6)}>
					<Image src={img_P2} className='card-img'/>
					<Card.Content>
						<Card.Header>{title6}</Card.Header>
						<Card.Meta>{role6}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura6}
					</Card.Content>					
				</Card>
				<Card onClick={(e) => this.handleOpen(e,title7,role7,7,img_P3,link7)}>
					<Image src={img_P3} className='card-img'/>
					<Card.Content>
						<Card.Header>{title7}</Card.Header>
						<Card.Meta>{role7}</Card.Meta>
					</Card.Content>
					<Card.Content extra>
							<Icon name='clock outline' />
							{dura7}
					</Card.Content>					
				</Card>
				</Card.Group>
				<Header as='h2' icon textAlign='center' className='portfolio-header'>
				<Divider horizontal>
		  			<Icon name='code' circular />
		  			<Header.Content>Skills</Header.Content>
		  		</Divider>
				</Header>
				<Card.Group centered itemsPerRow={this.state.rowItems}>
				<Card>
					<Card.Content>
						<Card.Header>Programming Languages</Card.Header>
						<Divider/>
						<Card.Description>
							<Label.Group size='big'>
								<Label>Javascript</Label>
								<Label>Java</Label>
								<Label>Python</Label>
								<Label>HTML</Label>
								<Label>CSS</Label>
								<Label>SQL</Label>
								<Label>C</Label>
								<Label>Bash</Label>
								<Label>PHP</Label>
								<Label>OCaml</Label>
								<Label>UNIX Shell Scripting</Label>
							</Label.Group>						
						</Card.Description>
					</Card.Content>

				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Software Tools</Card.Header>
						<Divider/>
						<Card.Description>
							<Label.Group size = 'big'>
								<Label>AngularJS</Label>
								<Label>React</Label>
								<Label>Node.js</Label>
								<Label>Hibernate</Label>
								<Label>Flask</Label>
								<Label>Jersey</Label>
								<Label>OpenCV</Label>
								<Label>Scikit-learn</Label>
								<Label>TensorFlow</Label>
								<Label>Keras</Label>
								<Label>PyTorch</Label>
								<Label>Spark</Label>
								<Label>Git</Label>
								<Label>SVN</Label>
								<Label>JIRA</Label>
							</Label.Group>						
						</Card.Description>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Industry Knowledge</Card.Header>
						<Divider/>
						<Card.Description>
							<Label.Group size = 'big'>
								<Label>Full Stack Web Development</Label>
								<Label>Agile Programming Methodology</Label>
								<Label>Computer Vision</Label>
								<Label>Applied Machine Learning</Label>
								<Label>Natural Language Processing</Label>
								<Label>Database Management</Label>
							</Label.Group>						
						</Card.Description>
					</Card.Content>
				</Card>				
				</Card.Group>
				<ExpModal modalTitle={this.state.modalTitle} modalSubTitle={this.state.modalSubTitle} modalSummary={this.state.modalSummary} modalImgPath={this.state.modalImgPath} modalClick={this.state.modalClick} handleClose={() =>this.handleClose()} modalLink={this.state.modalLink}/>
				</div>
		)
	}
};