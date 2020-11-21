import Picture from "../Picture.js";

const Jaden = ({ openWindow }) => {
	return (
		<Picture
			src={"headshot"}
			alt={"Picture of Me"}
			onClick={() => {openWindow("Jaden")}} />
	);
};

export default Jaden;
