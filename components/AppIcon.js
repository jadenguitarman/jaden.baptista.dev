import React, { Component } from 'react';
import styles from '../styles/AppIcon.module.css';

class AppIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {Icon: null};
	}

	componentDidMount() {
		this.getIcon(); //load icon asynchronously
	}

	async getIcon () {
		const {default: Icon} = await import(`../components/icons/${this.props.src}`);
		this.setState({ Icon }); //set state when icon is loaded, which forces a rerender
	}

	render() {
		const Icon = this.state.Icon;
		return (
			<div
				className={`${styles.icon} ${this.props.alwaysShowLabel
					? styles.alwaysShowLabel
					: ""
				}`}
				data-app={JSON.stringify(this.props)}
				data-id={this.props.src}
			>
				{Icon
					? <Icon
						openWindow={!!this.props.openWindow
							? this.props.openWindow
							: null }
						newNotification={!!this.props.newNotification
							? this.props.newNotification
							: null } />
					: null /* only render something if we have the icon */ }

				{!!this.props.label
					? <span className="autodidact">{this.props.label}</span>
					: null}

				{this.props.open
					? <div className={styles.open}></div>
					: null}
			</div>
		);
	}
}

export default AppIcon;
