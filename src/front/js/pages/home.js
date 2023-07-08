import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import chico from "../../img/chico.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=> {
		fetch(process.env.BACKEND_URL + "api/user")
		.then(Response => Response.json())
		.then(Response => {
			console.log(Response)
		})

	})

	return (
			
			<div className="row text-center d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
				<div className="col-4">
			
    			<img className="mb-2" src={chico} alt="" width="250"/>

				<main className="form-signin">
				<form>
					<h1 className="h3 mb-3 fw-normal">Ingresa tus datos</h1>

					<div className="form-floating mb-2">
					<input type="nickname" className="form-control" id="floatingInput" placeholder="Nickname"/>
					<label for="floatingInput">Nickname</label>
					</div>
					<div className="form-floating">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
					<label for="floatingPassword">Contraseña</label>
					</div>

					<div className="checkbox mb-3">
					
					</div>
					<button className="w-100 btn btn-lg btn-primary my_button" type="submit">Iniciar Sesión</button>

					<div className="alert alert-warning mt-5">
  					¿Aún no tienes cuenta? <br></br>
					<button type="button" className="btn btn-sm mt-2 button_2">Registrarse</button>

					</div>	
						
					
				
				</form>
				</main>
				</div>
				</div>
	);
};
