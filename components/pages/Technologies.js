import React, { Component } from 'react';
import styles from '../../styles/Technologies.module.css';

class Technologies extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		if (!!this.props.section) {
			const container = document.getElementById(styles.container);
			const selected = container.querySelector("#" + this.props.section);
			container.parentNode.scrollTop = selected.offsetTop - 10;
		}
	}

	render () {
		return (
			<div id={styles.container}>
				<h1>Technologies</h1>

				<br />
				<br />

				<h2 id="html">HTML</h2>
				<p>HTML is the base of everything on the web. It's the way we define the relation of data to other data and plays a big part in accessibility, visual styling, and performance. I've used HTML on every web project I've worked on for years, and I know it inside and out.</p>
				<br />

				<h2 id="css">CSS</h2>
				<p>If HTML is how something is structured, CSS is how it looks. It's always paired with HTML, so I've spent years mastering CSS and figuring out how to use its big features and little quirks to create engaging and interactive web applications.</p>
				<br />

				<h2 id="javascript">JavaScript</h2>
				<p>JavaScript is a powerful language used to add interactivity to otherwise plain, static pages. It's the language I specialize in since it lets me exercise problem solving skills and iterate on my solutions to reach maximum efficiency and elegance.</p>
				<br />

				<h2 id="nodejs">Node.JS</h2>
				<p>JavaScript isn't only for the client though: I'm well-versed in Node.JS, the most common server-side JavaScript runtime. At any given point, I have probably a dozen projects in progress running on Node.JS.</p>
				<br />

				<h2 id="reactjs">React.JS</h2>
				<p>React lets me organize a page into components, changing the way I conceptualize the pieces of the page. This lets me work closer with designers and reuse code to keep the site consistent throughout.</p>
				<br />

				<h2 id="nextjs">Next.JS</h2>
				<p>Next.JS takes those React components and compiles them into plain HTML to be served the old fashioned way. It's the perfect blend of user and developer experience and it's my go-to framework when I'm asked to build a site from scratch.</p>
				<br />

				<h2 id="python">Python</h2>
				<p>Python was my first language and the programming equivalent of my native tongue. It works great in almost any circumstance and is the closest we have to the perfect all-purpose language. My highest-intensity servers and most complicated apps are built in Python.</p>
				<br />

				<h2 id="sql">SQL</h2>
				<p>The language of data. SQL is how we get, set, fix, and delete data stored in databases. I've used all sorts of different flavors to get that done, including MySQL, PostgreSQL, SQLLite, MariaDB, Oracle, and NoSQL.</p>
				<br />

				<h2 id="php">PHP</h2>
				<p>I wasn't traditionally a PHP person... but then I got a job where PHP was used to power the server side of a their proprietary webapps. I learned PHP in two weeks and was able to jump right in. It's more of a niche language. Where it'd needed (dynamically generated webapps), it's perfect. Where it's not needed, it can easily be replaced by a simpler technology like Node.JS.</p>
				<br />

				<h2 id="netlify">Netlify</h2>
				<p>Netlify is the perfect platform for deploying static applications because of their super-performant network of edge nodes, which can serve your assets from the location closest to the user. Netlify also comes with built-in support for custom APIs, so I constantly am adding in more dynamic functionality to my static sites without losing the speed benefits.</p>
				<br />

				<h2 id="fauna">Fauna</h2>
				<p>Fauna is a database-as-a-service system that lets developers offload their persistent storage to the cloud without losing control over their data. I use it anytime I create a new cloud-hosted web application so that I can remove the need to own and maintain my own databases.</p>
				<br />

				<h2 id="rust">Rust</h2>
				<p>Rust: the language of the future. It compiles down to optimal bytecode, so it runs faster than other less-optimized compiled languages. It's low-level, but it can work on the browser in the context of WebAssembly. I use it anytime I need to perform high intensity calculations client-side, like in video or 3D rendering applications.</p>
			</div>
		);
	}
}

export default Technologies;
