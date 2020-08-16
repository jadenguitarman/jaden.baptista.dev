import styles from '../styles/Dock.module.css';
import AppIcon from '../components/AppIcon';

const Dock = props => {
	return (
		<div className={styles.dock}>
			{
				[
					"JavaScript",
					"Python",
					"HTML5",
					"CSS3",
					"NodeJS",
					"ReactJS",
					"Netlify",
					"PHP",
					"NextJS",
					"MySQL",
					"PostgreSQL",
					"Fauna",
					"Laravel",
					"Rust" // */
				].map(technology => <AppIcon src={technology} key={technology}/>)
			}
		</div>
	);
};

export default Dock;
