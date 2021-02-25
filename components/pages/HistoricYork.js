import React, { Component } from 'react';
import styles from '../../styles/HistoricYork.module.css';

class HistoricYork extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>Historic York</h1>
				<p>A website for a charity focused on preserving the historic architecture of America's first capital.</p>
				<br/>
				<br/>

				<h2>How It Started</h2>
				<p>As part of my college graduation project, I picked a charity whose cause I want to support and built them a website for free.</p>
				<br/>
				<br/>
				<br/>

				<h2>The Plan</h2>
				<p>This was a perfect opportunity for me to hone my people skills, since I had to work with the charity and its board members directly to organize the site, merge existing content, create new content, settle on branding and styling, and set up the donation system. We intended to create a simple, but evocative home page to go along with the fully fleshed out blog and the busier donation page. Of course, this plan evolved fluidly as development continued after many discussions with those involved in the project, but generally the end result matches the initial goal quite well. I'm pleased with how it turned out, and so I excitedly share the prototypes and initial high-fidelity mockups with many of my customers to show that I'll do my best to work on their schedule and for their mission. <a className={styles.a} onClick={() => this.props.openWindow("Browser", "https://historic-york.baptista.dev")}>Check out those sample pages here.</a></p>
			</div>
		);
	}
}

export default HistoricYork;
