const Finder = ({openWindow}) => {
	return (
		<svg viewBox="0 0 123.84 93.95" onClick={() => {openWindow("Finder", "documents")}}>
			<g transform="translate(-4 -8)">
				<path fill="#dfca3d" d="M103.82 19.74H56.85L45.1 8H15.74A11.78 11.78 0 004 19.74V90.2a11.78 11.78 0 0011.74 11.74h91.02a8.65 8.65 0 008.8-8.8V31.49a11.78 11.78 0 00-11.74-11.75z"/>
				<rect width="72.19" height="12.48" fill="#fff" rx="1" transform="translate(36.53 27.98)"/>
				<path fill="#f0db4e" d="M116.15 37.36H37.18a11.65 11.65 0 00-11.45 9.69l-9.99 54.9h93.07a11.65 11.65 0 0011.45-9.69l7.34-41.1a11.62 11.62 0 00-11.45-13.8z"/>
			</g>
		</svg>
	);
};

export default Finder;
