const CompassWave = ({openWindow}) => {
	return (
		<svg viewBox="0 0 40 40" onClick={() => {openWindow("CompassWave")}}>
			<rect width="40" height="40" fill="#eee" rx="2"/>
			<path fill="#5c8535" d="M.5 20.2c.01-6.48 6.35-10.22 11.4-8.06 1.24.53.76 2.78 0 2.45-3.02-1.34-8.66-.42-8.67 5.6 0 6.04 4.8 6.66 9.25 5.35.86-.25.92 1.88 0 2.22C6.38 30.03.49 26.68.5 20.2z"/>
			<path fill="#929292" d="M26.64 15.18l4.39 13.33H34l5.49-17.02h-2.8l-4.18 13.63-4.41-13.63h-1.47zm0 0l-4.39 13.33h-2.98l-5.49-17.02h2.8l4.18 13.63 4.41-13.63h1.47z"/>
		</svg>
	);
};

export default CompassWave;
