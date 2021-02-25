import React, { Component } from 'react';
import styles from '../styles/Desktop.module.css';
import Picture from '../components/Picture.js';
import Dock from '../components/Dock';
import NotificationContainer from '../components/NotificationContainer';
import AppIcon from '../components/AppIcon';
import Window from '../components/Window';
import NoSSR from 'react-no-ssr';

class Desktop extends Component {
	constructor (props) {
		super(props);
		this.state = {
			notifications: [],
			windows: [],
			hasBeenClicked: false
		};

		this.openWindow = this.openWindow.bind(this);
		this.closeWindow = this.closeWindow.bind(this);
		this.newNotification = this.newNotification.bind(this);
		this.registerClick = this.registerClick.bind(this);
		this.updateDimensions();
	}

	updateDimensions () {
		this.state = {
			...this.state,
			width: typeof window === "undefined" ? 0 : window.innerWidth,
			height: typeof window === "undefined" ? 0 : window.innerHeight
		};
	}

	componentDidMount () {
		window.addEventListener('resize', this.updateDimensions);


		setTimeout(() => {
			if (!this.state.hasBeenClicked) this.newNotification("Help", "Tips", "This page works like a Mac, so click around!")
		}, 8000);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.updateDimensions);
	}

	// these next two functions are passed all the way down to the icons and the windows
	openWindow (page, section) {
		const id = this.state.windows
			.map(x => x.id)
			.sort()
			.reduce((acc, item) => (item == (acc + 1) ? item : acc), 0) + 1;

		this.setState({
			windows: [
				...this.state.windows,
				{id, page, section}
			]
		});
	}

	closeWindow (id) {
		this.setState({
			windows: this.state.windows.filter(x => x.id != id)
		});
	}

	newNotification (icon, title, message) {
		const id = this.state.notifications
			.map(x => x.id)
			.sort()
			.reduce((acc, item) => (item == (acc + 1) ? item : acc), 0) + 1;

		this.setState({
			notifications: [
				...this.state.notifications,
				{ id, icon, title, message }
			]
		}, () => {
			setTimeout(() => {
				this.setState({
					notifications: this.state.notifications.filter(x => x.id != id)
				});
			}, 5000);
		});
	}

	registerClick () {
		this.state.hasBeenClicked = true;
	}

	render () {
		return (
			<div className={styles.background}>
				<Picture src="positano" alt="Background of Positano Italy"/>

				<NoSSR>
					<div className={styles.icons}>{[
						["Resume"],
						["Technologies"],
						["Sidus"],
						["Trash", "Trash", styles.trash],
						["Finder"],
						["CompassWave", "Compass Wave"],
						["EDS", "Energy ...ems"],
						["Jaden"],
						["HistoricYork", "Historic York"]
					].map(([icon, label, id], i) => !!icon
						? <AppIcon
							src={ icon }
							key={ icon }
							label={ label ? label : icon }
							alwaysShowLabel
							openWindow={this.openWindow}
							newNotification={this.newNotification}
							id={ id }
							registerClick={this.registerClick} />
						: <div key={`space-${i}`}></div>
					)}</div>

					<Dock
						apps={[
							{
								src: "JavaScript",
								open: true
							},
							{
								src: "Python"
							},
							{
								src: "HTML5",
								open: true
							},
							{
								src: "CSS3",
								open: true
							},
							{
								src: "NodeJS",
								label: "Node.js",
								open: true
							},
							{
								src: "PHP"
							},
							{
								src: "Netlify",
								open: true
							},
							{
								src: "ReactJS",
								label: "React",
								open: true
							},
							{
								src: "NextJS",
								label: "Next.js",
								open: true
							},
							{
								src: "MySQL"
							},
							{
								src: "PostgreSQL"
							},
							{
								src: "Fauna"
							},
							{
								src: "Laravel"
							},
							{
								src: "Rust"
							}
						]}
						openWindow={this.openWindow}
						registerClick={this.registerClick} />
				</NoSSR>

				{this.state.windows.map(window =>
					<Window
						page={window.page}
						section={window.section}
						key={`window-${window.id}`}
						closeWindow={() => {this.closeWindow(window.id)}}
						openWindow={this.openWindow}
						newNotification={this.newNotification} />
				)}

				<NotificationContainer notifications={this.state.notifications} />
			</div>
		);
	}
}

export default Desktop;
