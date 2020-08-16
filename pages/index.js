import Head from 'next/head';
import Desktop from '../components/Desktop';

const Home = props => {
	return (
		<div>
			<Head>
				<title>Jaden Baptista, Full Stack Developer</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				<Desktop/>
			</main>
		</div>
	);
};

export default Home;
