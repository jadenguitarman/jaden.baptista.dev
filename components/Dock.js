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
				let sortable = new Sortable(dock, {
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

				// reorganize if in localstorage
				if (localStorage.jadenApps) sortable.sort(JSON.parse(localStorage.jadenApps).map(x => x.src));
			});
		}

		return (
			<div className={styles.dock}>
				{this.state.apps.map((app, index) =>
					<AppIcon
						src={app.src}
						key={app.src}
						label={app.label || app.src}
						open={app.open}
						openWindow={this.props.openWindow}
					/>
				)}
			</div>
		);
	}
}

export default Dock;
