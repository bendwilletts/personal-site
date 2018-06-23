import React, {Component} from 'react';
import {Segment, Image} from 'semantic-ui-react';
import Typing from 'react-typing-animation';

export default class HomePage extends Component {
	state={};


	render() {
		const background = require('../../images/background.png');
		const resume = require('../../files/BenWilletts_Resume.pdf');
		return(
			<div>
				<Segment className='home-segment'>
					<Image className = 'home-img' src={background} fluid/>
					<Typing className = 'intro-msg' startDelay = {500} speed = {15}>
						<span class="var-highlight">var</span> MyProfile = &#123;<br/><Typing.Delay ms={500} /> 
						    &emsp;&emsp;name&#58; <Typing.Delay ms={200} /> <span class="string-highlight">'Ben Willetts'</span>,<br/><Typing.Delay ms={400} /> 
						   	&emsp;&emsp;major&#58; <Typing.Delay ms={200} /> <span class="string-highlight">'Software Engineering'</span>,<br/><Typing.Delay ms={400} /> 
						    &emsp;&emsp;location&#58; <Typing.Delay ms={200} />  <span class="string-highlight">'Montreal, Canada'</span>,<br/><Typing.Delay ms={400} /> 
						    &emsp;&emsp;skills&#58;<Typing.Delay ms={200} /> [<span class="string-highlight">'Javascript'</span>,<br/><Typing.Delay ms={50} /> 
						    &emsp;&emsp;&emsp;&emsp;<span class="string-highlight">'HTML/CSS'</span>,<br/><Typing.Delay ms={50} /> 
						    &emsp;&emsp;&emsp;&emsp;<span class="string-highlight">'Java'</span>,<br/><Typing.Delay ms={50} /> 
						    &emsp;&emsp;&emsp;&emsp;<span class="string-highlight">'Python'</span>],<br/><Typing.Delay ms={200} /> 
						    &emsp;&emsp;moreInfo&#58;<Typing.Delay ms={200} /> <span class="var-highlight">function</span>() &#123; <span class="var-highlight">return</span> <a href={resume} download='BenWilletts_Resume'>Resume</a>; &#125;<br/>
					&#125;; </Typing>
				</Segment>
			</div>
		);
	}
};

