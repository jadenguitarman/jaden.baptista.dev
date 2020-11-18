import React, { Component } from 'react';
import styles from '../styles/NotificationContainer.module.css';
import Notification from '../components/Notification';

class NotificationContainer extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.notificationContainer}>
				{this.props.notifications.map(notification =>
					<Notification
						title={notification.title}
						icon={notification.icon}
						message={notification.message}
						key={`notification-${notification.id}`} />
				)}
			</div>
		);
	}
}

export default NotificationContainer;
