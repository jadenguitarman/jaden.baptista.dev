import React, { Component } from 'react';
import styles from '../styles/Finder.module.css';
import AppIcon from '../components/AppIcon';

class Finder extends Component {
	constructor (props) {
		super(props);

		this.folders = {
			technologies: {
				label: "Technologies",
				files: [
					{
						icon: "Chrome",
						name: "CSS3",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "css")}
					},
					{
						icon: "Chrome",
						name: "Fauna",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "fauna")}
					},
					{
						icon: "Chrome",
						name: "HTML5",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "html")}
					},
					{
						icon: "Chrome",
						name: "JavaScript",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "javascript")}
					},
					{
						icon: "Chrome",
						name: "Netlify",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "netlify")}
					},
					{
						icon: "Chrome",
						name: "NextJS",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "nextjs")}
					},
					{
						icon: "Chrome",
						name: "NodeJS",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "nodejs")}
					},
					{
						icon: "Chrome",
						name: "PHP",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "php")}
					},
					{
						icon: "Chrome",
						name: "Python",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "python")}
					},
					{
						icon: "Chrome",
						name: "ReactJS",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "reactjs")}
					},
					{
						icon: "Chrome",
						name: "Rust",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "rust")}
					},
					{
						icon: "Chrome",
						name: "SQL",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Technologies", "sql")}
					}
				]
			},
			documents: {
				label: "Documents",
				files: [
					{
						icon: "PDF",
						name: "Jaden Baptista Resume.pdf",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {
							// download the resume pdf
							let link = document.createElement('a');
							link.href = "/assets/Jaden_Baptista_Resume.pdf";
							link.download = 'Jaden Baptista Resume.pdf';
							link.dispatchEvent(new MouseEvent('click'));
						}
					}
				]
			},
			portfolio: {
				label: "Portfolio",
				files: [
					{
						icon: "Chrome",
						name: "Sidus",
						modified: "Today at 9:36 AM",
						created: "Sept 13, 2020 at 5:49 PM",
						size: "1.2 KB",
						kind: "HTML text",
						onClick: () => {this.props.openWindow("Sidus")}
					}
				]
			}
		}

		this.state = {
			section: this.props.section,
			files: this.folders[this.props.section].files
		};
	}

	render () {
		return (
			<div className={styles.container}>
				<div className={styles.header}></div>

				<div className={styles.content}>
					<div className={styles.sidebar}>
						{Object.entries(this.folders).map(([name, {label, files}]) =>
							<div
								className={`${styles.sidebarFolder} ${
									name == this.state.section
										? styles.activeFolder
										: null
								}`}
								key={label}
								onClick={() => { this.setState({
									section: name,
									files
								}) }}
							>
								<AppIcon src={"Folder"} />
								<span>{label}</span>
							</div>
						)}
					</div>

					<div className={styles.files}>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Date Modified</th>
									<th>Date Created</th>
									<th>Size</th>
									<th>Kind</th>
								</tr>
							</thead>

							<tbody>
								{this.state.files.map(({icon, name, modified, created, size, kind, onClick}) =>
									<tr onClick={onClick} key={name}>
										<td>
											<AppIcon src={icon} />
											<span>{name}</span>
										</td>
										<td>{modified}</td>
										<td>{created}</td>
										<td>{size}</td>
										<td>{kind}</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Finder;
