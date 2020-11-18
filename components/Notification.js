import React, { Component } from 'react';
import styles from '../styles/Notification.module.css';
import AppIcon from '../components/AppIcon';

class Notification extends Component {
	constructor (props) {
		super(props);
		/*
			this.props.notifications looks like
			[
				{
					id: 12, // number
					icon: "/path",
					title: "Trash",
					message: "something something"
				}
			]
		*/
	}

	render () {
		return (
			<div className={styles.notification}>
				<AppIcon src={this.props.icon} />
				<div className={styles.content}>
					<span className={styles.title}>{this.props.title}</span>
					<span className={styles.message}>{this.props.message}</span>
				</div>
			</div>
		);
	}
}

export default Notification;
