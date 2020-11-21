const Picture = props => {
	return (
		<picture onClick={props.onClick}>
			<source type='image/webp' srcSet={`/assets/${props.src}.webp`}/>
			<img src={`/assets/${props.src}.jpg`} loading="eager" alt={props.alt || ''}/>
		</picture>
	);
};

export default Picture;
