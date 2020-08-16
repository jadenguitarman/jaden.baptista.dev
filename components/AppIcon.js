import React, { Component } from 'react';

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
		return Icon ? <Icon/> : null; // only render something if we have the icon
	}
}

export default AppIcon;
