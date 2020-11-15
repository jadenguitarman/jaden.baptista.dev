import React, { Component } from 'react';
import styles from '../styles/Technologies.module.css';

class Technologies extends Component {
	constructor(props) {
		super(props);
		this.refs = [
			"html",
			"css",
			"javascript",
			"nodejs",
			"reactjs",
			"nextjs",
			"python",
			"sql",
			"php",
			"netlify",
			"fauna",
			"rust"
		].reduce((acc, item) => ({
				...acc,
				[item]: React.createRef()
		}), {});
		console.log(this.refs);
	}

	componentDidMount() {
		this.refs[this.props.section].current.scrollIntoView(true);
	}

	render() {
		return (
			<>
				<h1>Technologies</h1>

				<h2 id="html" ref={this.refs.html}>HTML</h2>
				<p>HTML is the base of everything on the web. It's the way we define the relation of data to other data and plays a big part in accessibility, visual styling, and performance. I've used HTML on every web project I've worked on for years, and I know it inside and out.</p>

				<h2 id="css" ref={this.refs.css}>CSS</h2>
				<p>If HTML is how something is structured, CSS is how it looks. It's always paired with HTML, so I've spent years mastering CSS and figuring out how to use its big features and little quirks to create engaging and interactive web applications.</p>

				<h2 id="javascript" ref={this.refs.javascript}>JavaScript</h2>
				<p>JavaScript is a powerful language used to add interactivity to otherwise plain, static pages. It's the language I specialize in since it lets me exercise problem solving skills and iterate on my solutions to reach maximum efficiency and elegance.</p>

				<h2 id="nodejs" ref={this.refs.nodejs}>Node.JS</h2>
				<p>JavaScript isn't only for the client though: I'm well-versed in Node.JS, the most common server-side JavaScript runtime. At any given point, I have probably a dozen projects in progress running on Node.JS.</p>

				<h2 id="reactjs" ref={this.refs.reactjs}>React.JS</h2>
				<p>React lets me organize a page into components, changing the way I conceptualize the pieces of the page. This lets me work closer with designers and reuse code to keep the site consistent throughout.</p>

				<h2 id="nextjs" ref={this.refs.nextjs}>Next.JS</h2>
				<p>Next.JS takes those React components and compiles them into plain HTML to be served the old fashioned way. It's the perfect blend of user and developer experience and it's my go-to framework when I'm asked to build a site from scratch.</p>

				<h2 id="python" ref={this.refs.python}>Python</h2>
				<p>Python was my first language and the programming equivalent of my native tongue. It works great in almost any circumstance and is the closest we have to the perfect all-purpose language. My highest-intensity servers and most complicated apps are built in Python.</p>

				<h2 id="sql" ref={this.refs.sql}>SQL</h2>
				<p>The language of data. SQL is how we get, set, fix, and delete data stored in databases. I've used all sorts of different flavors to get that done, including MySQL, PostgreSQL, SQLLite, MariaDB, Oracle, and NoSQL.</p>

				<h2 id="php" ref={this.refs.php}>PHP</h2>
				<p>I wasn't traditionally a PHP person... but then I got a job where PHP was used to power the server side of a their proprietary webapps. I learned PHP in two weeks and was able to jump right in. It's more of a niche language. Where it'd needed (dynamically generated webapps), it's perfect. Where it's not needed, it can easily be replaced by a simpler technology like Node.JS.</p>

				<h2 id="netlify" ref={this.refs.netlify}>Netlify</h2>
				<p>Netlify is the perfect platform for deploying static applications because of their super-performant network of edge nodes, which can serve your assets from the location closest to the user. Netlify also comes with built-in support for custom APIs, so I constantly am adding in more dynamic functionality to my static sites without losing the speed benefits.</p>

				<h2 id="fauna" ref={this.refs.fauna}>Fauna</h2>
				<p>Fauna is a database-as-a-service system that lets developers offload their persistent storage to the cloud without losing control over their data. I use it anytime I create a new cloud-hosted web application so that I can remove the need to own and maintain my own databases.</p>

				<h2 id="rust" ref={this.refs.rust}>Rust</h2>
				<p>Rust: the language of the future. It compiles down to optimal bytecode, so it runs faster than other less-optimized compiled languages. It's low-level, but it can work on the browser in the context of WebAssembly. I use it anytime I need to perform high intensity calculations client-side, like in video or 3D rendering applications.</p>
			</>
		);
	}
}

export default Technologies;
