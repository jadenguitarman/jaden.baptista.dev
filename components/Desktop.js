import styles from '../styles/Desktop.module.css';
import Picture from '../components/Picture.js';

const Desktop = props => {
	return (
		<div className={styles.background}>
			<Picture src="positano" alt="Background of Positano Italy"/>
		</div>
	);
};

export default Desktop;
