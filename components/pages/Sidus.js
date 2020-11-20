import React, { Component } from 'react';
import styles from '../../styles/Sidus.module.css';

class Sidus extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>Sidus</h1>
				<p>Back in high school, I was already pushing boundaries and showing leadership.</p>
				<br/>
				<br/>

				<h2>How It Started</h2>
				<p>One day in class, I found out that a classmate named Jonah had made a simplistic chatting app in Python. It couldn't do much. It was just one room, without any permanent storage or registered users. The design wasn't much to write home about either, but it functioned well, and I saw potential.</p>
				<p>I approached Jonah about turning it into a full-scale, education-centric social media application, and I think he chuckled... It seemed outlandish, but I got him to agree. He quickly rewrote the core server-side code in Node.JS, pushed it to Heroku, and gave me the keys to the repo. Before long, we were using a cooperating teacher's office hours to hold meetings and plan through what we wanted in a final product.</p>
				<p>I recommended that we start bringing some designers into Sidus to create a more polished appearance. Before long, Nicole, Skylar, and Ashley were onboard with the plan and churning out graphics and icons and mockups (oh my) faster than we could ask for them. I sort-of became the defacto leader of the group, so I chaired our meetings and functioned as the primary developer on both client-side and server-side.</p>
				<br/>
				<br/>
				<br/>

				<h2>Our Plan</h2>
				<p>The gaping hole we saw in the current market was the lack of a social media application uniquely tailored to students. Students often ended up going for options that gave them more freedom (like Discord), but at the cost of their safety. These apps were barely regulated and therefore created the perfect conditions for cheating and passing around inappropriate materials outside of the school's jurisdiction.</p>
				<p>Our solution was Sidus, a licensed, Discord-style social media application that allows the students the same freedoms while providing safe boundaries and the oversight of their respective schools. We focused on accountability: nothing was anonymous, which discouraged abuse of those freedoms. Students were registered by their school and were given the ability to have quasi-private conversations with teachers and other students. School announcements were given their own channels, teachers could create groups for each class to discuss class-specific topics, and students could be connected with qualified tutors right in the app. These tutors could make use of built-in educational tools, like an artificial intelligence that, when given permission, would read the last twenty messages in a conversation, discern the topic, and suggest relevant educational material from Google, YouTube, ERIC (the U.S. Dept. of Education approved search engine), and netTrekker (another research-focused search engine). Student-made creative works were displayed prominently on the newsfeed, alongside summaries of recent events and entertaining fictional stories and arcade-style games, like a Roman-themed version of the Oregon Trail called the Appian Way.</p>
				<br/>
				<br/>
				<br/>

				<h2>The Result</h2>
				<p>This is where things took a turn for the worse. Our prospective customers (our school, and others we spoke to) were running on increasingly tight budgets. Funding was dropping, and they had no room to license our software. Seeing that our ready-to-sell program wasn't selling (while through no fault of our own) caused all of our team members (up to 7, at this point) to part ways amicably. I was left with the intellectual rights to the software, and the designers took pieces of their work for their portfolios. It's still hanging around the internet, though we've moved on to newer projects with easier markets to break into.</p>
			</div>
		);
	}
}

export default Sidus;
