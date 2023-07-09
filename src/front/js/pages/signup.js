import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../img/Mobile-login.jpg";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<>
		
		<div className="row d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
		<div className="card mb-3 shadow" style={{ maxWidth: '75%' }}>
  			<div className="row g-0">
   				<div className="col-md-4">
      				<img src={login} className="img-fluid rounded-start" alt="Imagen registro"/>
    			</div>
    		<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title titulo mb-3">Ingresa tus datos para registrarte</h5>
					<div className="form-floating mb-3">
						<input type="email" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com"/>
						<label htmlFor="floatingInput">Email</label>
					</div>
					<div className="form-floating mb-3">
						<input type="nombre" className="form-control" id="floatingName" placeholder="Nickname"/>
						<label htmlFor="floatingName">Nickname</label>
					</div>
					<div className="form-floating mb-3">
						<input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
						<label htmlFor="floatingPassword">Contraseña</label>
					</div>
					
					<div className="d-grid d-md-flex justify-content-md-end">
					<button className="btn button_1" type="submit">Registrarme</button>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>
		
		</>

	);
};
