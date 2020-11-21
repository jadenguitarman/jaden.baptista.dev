import React, { Component } from 'react';
import styles from '../../styles/EDS.module.css';

class EDS extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>Energy Design Systems</h1>
				<p>As Lead Full-Stack Developer, I turn management's concepts into reality and bring legacy products into the new age of web development.</p>
				<br/>
				<br/>
				<br/>

				<h2>What They Do</h2>
				<p><a className={styles.a} onClick={() => this.props.openWindow("Browser", "https://compasswave.com")}>Energy Design Systems</a> is a software development firm focused on providing necessary and convenient services to HVAC professionals in the field.</p>
				<br/>
				<br/>
				<br/>

				<h2>What I Do</h2>
				<p>I work closely with some of the more well-known HVAC professionals in the industry to collaborate on development of their flagship product, a specialized web interface for calculating the load that a house puts on an air conditioner. I often work with customers directly, even keeping the fastest customer inquiry response time among my coworkers. Being so involved in customer support allows me to respond quickly and efficiently to bug reports and feature requests, in addition to educating users about how to be the most productive they can be with our software.</p>
				<br/>

				<p>On the technical side, I've developed brand new products for EDS, utilizing the power of Laravel and MySQL to prepare for high-velocity scaling and intermittently heavy workloads without paying for unused server space. Under the direction of the part-owners, talented developers themselves, I became the driving force behind the motivation to embrace serverless technology in planned new versions of the Load Calculator and their several other products. My knowledge of database normalization came in handy when called upon to add new features and revamp several integral subsystems which all required extensive modifications and additions to the existing database structure. I'm not only restricted to development though; I routinely audited all company users with custom automation scripts several times. I ended up picking out and solving many issues with the company's billing system that were created by previous developers and managers, and my fixes saved the company a great deal of time and money.</p>
			</div>
		);
	}
}

export default EDS;
