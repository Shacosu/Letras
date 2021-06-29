import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";
import axios from "axios";

function App() {
	const [lyric, setLyric] = useState({});
	const [savelyric, setSaveLyric] = useState("");
	const [saveinfo, setInfo] = useState({});
	const { artista, cancion } = lyric;

	useEffect(() => {
		if (Object.keys(lyric).length === 0) return;
		const requestApiLyric = async () => {
			const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
			const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
			const [lyricAPI, infoAPI] = await Promise.all([
				axios.get(url),
				axios.get(url2),
			]);
			setSaveLyric(lyricAPI.data.lyrics);
			setInfo(infoAPI.data.artists[0]);
		};
		requestApiLyric();
	}, [lyric, saveinfo]);
	return (
		<React.Fragment>
			<Form setLyric={setLyric} />
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<Info saveinfo={saveinfo} />
					</div>
					<div className="col-md-6">
						<Song savelyric={savelyric} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
