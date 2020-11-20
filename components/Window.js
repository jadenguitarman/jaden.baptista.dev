import React, { Component } from 'react';
import styles from '../styles/Window.module.css';

class Window extends Component {
	constructor (props) {
		super(props);
		this.state = {
			maximized: false
		}

		this.window = React.createRef();

		this.initResize = this.initResize.bind(this);
		this.resize = this.resize.bind(this);
		this.stopResize = this.stopResize.bind(this);
		this.initDrag = this.initDrag.bind(this);
		this.drag = this.drag.bind(this);
		this.stopDrag = this.stopDrag.bind(this);
		this.minimizeWindow = this.minimizeWindow.bind(this);
		this.maximizeWindow = this.maximizeWindow.bind(this);
	}

	componentDidMount () {
		this.window.current.style.top = (window.innerHeight * 0.2) + "px";
		this.window.current.style.bottom = (window.innerHeight * 0.2) + "px";
		this.window.current.style.left = (window.innerWidth * 0.2) + "px";
		this.window.current.style.right = (window.innerWidth * 0.2) + "px";

		this.getContent(); //load content asynchronously
	}

	async getContent () {
		const {default: Content} = await import(`./pages/${this.props.page}`);
		this.setState({ Content }); //set state when icon is loaded, which forces a rerender
	}

	initResize (direction) {
		this.setState({direction});
		window.addEventListener('mousemove', this.resize, false);
		window.addEventListener('mouseup', this.stopResize, false);
	}

	resize (e) {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});

		if (this.state.direction.includes("n"))
			this.window.current.style.top = this.state.y + 'px';
		if (this.state.direction.includes("s"))
			this.window.current.style.bottom = (window.innerHeight - this.state.y) + 'px';
		if (this.state.direction.includes("e"))
			this.window.current.style.right = (window.innerWidth - this.state.x) + 'px';
		if (this.state.direction.includes("w"))
			this.window.current.style.left = this.state.x + 'px';
	}

	stopResize () {
		window.removeEventListener('mousemove', this.resize, false);
		window.removeEventListener('mouseup', this.stopResize, false);
	}

	initDrag (e) {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});

		window.addEventListener('mousemove', this.drag, false);
		window.addEventListener('mouseup', this.stopDrag, false);
	}

	drag (e) {
		let xdiff = this.state.x - e.clientX;
		let ydiff = this.state.y - e.clientY;
		this.setState({
			x: e.clientX,
			y: e.clientY
		});

		this.window.current.style.left = (this.window.current.offsetLeft - xdiff) + "px";
		this.window.current.style.right = (window.innerWidth - (this.window.current.offsetLeft + this.window.current.offsetWidth) + xdiff) + "px";

		this.window.current.style.top = (this.window.current.offsetTop - ydiff) + "px";
		this.window.current.style.bottom = (window.innerHeight - (this.window.current.offsetTop + this.window.current.offsetHeight) + ydiff) + "px";
	}

	stopDrag () {
		window.removeEventListener('mousemove', this.drag, false);
		window.removeEventListener('mouseup', this.stopDrag, false);
	}

	minimizeWindow () {
		if (this.state.maximized) this.setState({maximized: false});
		else this.props.closeWindow();
	}

	maximizeWindow () {
		this.setState({maximized: true});
	}

	render () {
		const Content = this.state.Content;
		return (
			<div className={`${styles.window} ${this.state.maximized ? styles.maximized : ""}`} ref={this.window}>
				{["ne", "nw", "sw", "se", "n", "s", "e", "w"].map((direction, i) =>
					<div
						className={[
							styles.resizer,
							styles[direction],
							i >= 4
								? styles.side
								: ""
						].join(" ")}
						onMouseDown={e => this.initResize(direction)}
						key={"resize-" + direction}
					></div>
				)}

				<div
					className={styles.bar}
					onMouseDown={this.initDrag}
				>
					<div className={styles.actions}>
						<div className={styles.exit} onClick={this.props.closeWindow} />
						<div className={styles.min} onClick={this.minimizeWindow} />
						<div className={styles.max} onClick={this.maximizeWindow} />
					</div>
				</div>

				<div className={styles.content}>
					{Content
						? <Content
							section={this.props.section}
							openWindow={this.props.openWindow}
							newNotification={this.props.newNotification} />
						: null /* only render something if we have the content */ }
				</div>
			</div>
		);
	}
}

export default Window;
