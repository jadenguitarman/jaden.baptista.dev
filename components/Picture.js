const Picture = props => {
	return (
		<picture>
			<source type='image/webp' srcSet={`/assets/${props.src}.webp`}/>
			<img src={`/assets/${props.src}.jpg`} loading="eager" alt={props.alt || ''}/>
		</picture>
	);
};

export default Picture;
