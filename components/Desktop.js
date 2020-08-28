import React, { Component } from 'react';
import styles from '../styles/Desktop.module.css';
import Picture from '../components/Picture.js';
import Dock from '../components/Dock';
import AppIcon from '../components/AppIcon';
import NoSSR from 'react-no-ssr';

class Desktop extends Component {
	constructor (props) {
		super(props);
		this.updateDimensions();
	}

	updateDimensions () {
		this.state = {
			width: typeof window === "undefined" ? 0 : window.innerWidth,
			height: typeof window === "undefined" ? 0 : window.innerHeight
		};
	}

	componentDidMount () {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	render () {
		return (
			<div className={styles.background}>
				<Picture src="positano" alt="Background of Positano Italy"/>

				<NoSSR>
					<div className={styles.icons}>{[
						"Resume"
					].map(icon => <AppIcon src={ "files/" + icon } key={ icon }/>)}</div>

					<Dock apps={[
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
					]}/>
				</NoSSR>
			</div>
		);
	}
}

export default Desktop;
