import React, { Component } from 'react';
import styles from '../../styles/CompassWave.module.css';

class CompassWave extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>Compass Wave</h1>
				<p>I maintain the existing codebase of and add new features to <a className={styles.a} onClick={() => this.props.openWindow("Browser", "https://compasswave.com")}>Compass Wave, a best-in-class lead generation software</a> for cleaning service companies.</p>
				<br/>
				<br/>

				<h2>How It Started</h2>
				<p>At only 16 years old, I approached a local businessman named Mark about interning at his web development firm. Within just a few months, I was promoted to Lead Full-Stack Developer and given control over his main program Compass Wave, second only to Mark.</p>
				<br/>
				<br/>
				<br/>

				<h2>What I've Done So Far</h2>
				<p>I progressed quickly with Compass Wave. Leading the development effort, I efficiently directed and got involved in the introduction of these features:</p>
				<ul>
					<li>The ability for cleaning service companies to customize questions on their lead generation widget</li>
					<li>A complete redesign of the entire website, both on the public-facing side and on the webapp</li>
					<li>A brand new, modular lead generation widget, loosely based on the old one, which allows the companies to mix and match which functionality they would like in their widget</li>
				</ul>
			</div>
		);
	}
}

export default CompassWave;
