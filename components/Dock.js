import React, { Component } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styles from '../styles/Dock.module.css';
import AppIcon from '../components/AppIcon';

// TODO: use <ReactSortable swap></ReactSortable> in this component

class Dock extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className={styles.dock}>
				{this.props.apps.map((app, index) =>
					<AppIcon
						src={app.src}
						key={app.src}
						label={app.label || app.src}
						open={app.open}
						openWindow={this.props.openWindow}
						registerClick={this.props.registerClick}
					/>
				)}
			</div>
		);
	}
}

export default Dock;
