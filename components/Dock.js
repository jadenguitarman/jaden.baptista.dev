import React, { Component } from 'react';
import styles from '../styles/Dock.module.css';
import AppIcon from '../components/AppIcon';
import Sortable from 'sortablejs';

class Dock extends Component {
	constructor (props) {
		super(props);
		this.state = {
			apps: this.props.apps
		};
	}

	render () {
		if (typeof window !== "undefined") {
			window.addEventListener("load", () => {
				const dock = document.querySelector("." + styles.dock);
				new Sortable(dock, {
					group: 'apps', // set both lists to same group
					animation: 150,
					swapThreshold: 0.3,
					ghostClass: styles.ghost,
					onUpdate: () => {
						localStorage.jadenApps = JSON.stringify(
							[...dock.children].map(
								icon => JSON.parse(icon.dataset.app)
							)
						);
					}
				});
			});

			if (localStorage.jadenApps) { // if localstorage has a list of apps, use that order instead
				let lsapps = JSON.parse(localStorage.jadenApps);
				if (
					lsapps.map(app => app.src).sort() != this.state.apps.map(app => app.src).sort()
					&& lsapps.length == this.state.apps.length
				) {
					this.state.apps = lsapps; //replace apps in state with apps from localstorage
				}
			}
		}

		return (
			<div className={styles.dock}>
				{this.state.apps.map((app, index) =>
					<AppIcon
						src={"icons/" + app.src}
						key={app.src}
						label={app.label || app.src}
						open={app.open}
					/>
				)}
			</div>
		);
	}
}

export default Dock;
