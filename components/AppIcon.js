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
			<div className={styles.icon} data-app={JSON.stringify(this.props)}>
				{Icon ? <Icon/> : null /* only render something if we have the icon */ }
				{!!this.props.label ? <span className="autodidact">{this.props.label}</span> : null}
				{this.props.open ? <div className={styles.open}></div> : null }
			</div>
		);
	}
}

export default AppIcon;
