import React from "react";

const Song = ({ savelyric }) => {
	if (savelyric.length === 0) return null;
	return (
		<React.Fragment>
			<h2>Letra de cancion</h2>
			<p className="letra">{savelyric}</p>
		</React.Fragment>
	);
};

export default Song;
