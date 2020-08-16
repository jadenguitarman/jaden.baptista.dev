import Head from 'next/head';
import Desktop from '../components/Desktop';
import Dock from '../components/Dock';

const Home = props => {
	return (
		<div>
			<Head>
				<title>Jaden Baptista, Full Stack Developer</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				<Desktop/>
				<Dock/>
			</main>
		</div>
	);
};

export default Home;
