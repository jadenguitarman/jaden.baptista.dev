import React, { Component } from 'react';
import styles from '../../styles/Jaden.module.css';

class Jaden extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>About Me</h1>
				<br/>

				<p>Self-motivated and forward-thinking young professional with over a decade of background in software development and full-time experience in at least eight programming languages. Experienced in seizing opportunities to use new technologies and development ideologies while simultaneously creating and maintaining easy-to-use products for multiple employers. Enthusiastic about the JAMstack, but skilled in more traditional applications as well.</p>
				<br/>
				<br/>
				<br/>

				<h2>Education</h2>
				<br/>

				<ul>
					<li>
						<span>Expected in 12/2020</span>
						<br/>
						<span>Harrisburg Area Community College</span>
						<br/>
						<span>Harrisburg, PA</span>
						<br/>
						<span>Associate of Applied Science: Web Development And Design</span>
						<br/>
						<span>4.0 GPA</span>
					</li>

					<li>
						<span>06/2019</span>
						<br/>
						<span>Pennsylvania Cyber Charter School</span>
						<br/>
						<span>Midland, PA</span>
						<br/>
						<span>High School Diploma</span>
						<br/>
						<span>4.0 GPA</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default Jaden;
