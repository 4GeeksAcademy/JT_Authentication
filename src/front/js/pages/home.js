import React, { useEffect, useState } from "react";
import chico from "../../img/chico.jpg";
import "../../styles/home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";


export const Home = () => {
	
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const token = localStorage.getItem("jwt-token");
		console.log("Token:", token);
	  	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("https://julitar-silver-robot-pj76jgqgpqxh7vqj-3001.preview.app.github.dev/api/login", {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({ name, password })
			});
		
			if (response.ok) {
			  const data = await response.json();
			  const token = data.token;
		
			  localStorage.setItem("jwt-token", token);

			  navigate("/private");
		
			} else {
			  throw new Error("There was a problem with the login request");
			}
		  } catch (error) {
			console.error(error);
		  }
		};


	return (
			
			<div className="row text-center d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
				<div className="col-4">
			
    				<img className="mb-2" src={chico} alt="" width="250"/>

					<main className="form-signin">
						<form onSubmit={handleSubmit}>
							<h1 className="h3 mb-3 fw-normal">Ingresa tus datos</h1>
							<div className="form-floating mb-2">
								<input type="nickname" className="form-control" id="name" placeholder="Nickname" value={name} onChange={(e) => setName(e.target.value)}/>
								<label htmlFor="name">Nickname</label>
							</div>
							<div className="form-floating">
								<input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
								<label htmlFor="password">Contraseña</label>
							</div>
					
							<button className="w-100 btn btn-lg btn-primary my_button mt-4" type="submit">Iniciar Sesión</button>

							<div className="alert alert-warning mt-5">
								¿Aún no tienes cuenta? <br></br>
								<Link to="/signup"><button type="button" className="btn btn-sm mt-2 button_2">Registrarse</button></Link>
							</div>	
						</form>
					</main>
				</div>
			</div>
	);
};
