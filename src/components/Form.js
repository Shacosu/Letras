import React, { useState } from "react";

const Form = ({ setLyric }) => {
	const [error, setError] = useState(false);
	const [search, setSearch] = useState({
		artista: "",
		cancion: "",
	});
	const { artista, cancion } = search;
	const handleInput = (e) => {
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (artista.trim() === "" || cancion.trim() === "") {
			setError(true);
			return;
		}
		setError(false);
		setLyric(search);
	};
	return (
		<div className="bg-info">
			<div className="container">
				<div className="row">
					<form
						className="col card text-white bg-transparent mb-5 pt-5 pb-5"
						onSubmit={handleSubmit}
					>
						<fieldset>
							<legend className="text-center">Buscador de letras</legend>
							{error ? (
								<p className="alert alert-primary text-center p-2">
									Todos los campos son obligatiorios{" "}
								</p>
							) : null}
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Artista</label>
										<input
											type="text"
											className="form-control"
											name="artista"
											placeholder="Nombre Artista..."
											onChange={handleInput}
											value={artista}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Cancion</label>
										<input
											type="text"
											className="form-control"
											name="cancion"
											placeholder="Nombre cancion..."
											onChange={handleInput}
											value={cancion}
										/>
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary float-right">
								Buscar
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
