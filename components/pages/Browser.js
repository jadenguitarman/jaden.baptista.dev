import React, { Component } from 'react';
import styles from '../../styles/Browser.module.css';

class Browser extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<iframe src={this.props.section} id={styles.iframe}></iframe>
		);
	}
}

export default Browser;
