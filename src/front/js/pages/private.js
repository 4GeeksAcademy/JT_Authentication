import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chica from "../../img/chica.jpg";

export const Private = () => {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState('Mis datos'); 
	const token = localStorage.getItem('jwt-token');

	const handleTabClick = (tab) => {
		setActiveTab(tab); 
		};

	const checkToken = async () => {
		try {
			if (!token) {
			setAuthenticated(false);
			setLoading(false);
			} else {
			const response = await fetch((process.env.BACKEND_URL + "api/privatearea"), {
				method: "GET",
				headers: {
				"Authorization": `Bearer ${token}`,
				},
			});
	
			if (!response.ok) {
				throw new Error("Error al acceder al área privada");
			}
	
			setAuthenticated(true);
			setLoading(false);
			}
		} catch (error) {
			console.error(error);
			setAuthenticated(false);
			setLoading(false);
		}
		};
	
		useEffect(() => {
		checkToken();
		}, []); 


	return (
		
		<div>

		{ loading ? (

			<div className="row justify-content-center text-center m-5">
				<div class="spinner-border text-warning" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>

		) : authenticated ? (

		<div className="row justify-content-center" style={{ height: '70vh' }}>
			<div className="col-8 text-center">
			<img className="mb-2 imagen mt-5" src={chica} alt=""/>
			</div>
			<div className="col-8 text-center">
				<p className="h3">Espacio Personal</p>
				<hr/>
			</div>
			<div className="col-8 mb-5">
				<div className="card text-center">
					<div className="card-header">
						<ul className="nav nav-tabs card-header-tabs">
							<li className="nav-item">
								<a className={`nav-link ${activeTab === 'Mis datos' ? 'active' : ''}`}
								onClick={() => handleTabClick('Mis datos')} aria-current="true" href="#">Mis datos</a>
							</li>
							<li className="nav-item">
								<a className={`nav-link ${activeTab === 'Suscripción' ? 'active' : ''}`}
								onClick={() => handleTabClick('Suscripción')} href="#">Suscripción</a>
							</li>
							<li className="nav-item">
								<a className={`nav-link ${activeTab === 'Envíos' ? 'active' : ''}`}
								onClick={() => handleTabClick('Envíos')} href="#">Envíos</a>
							</li>
						</ul>
					</div>
					<div className="card-body">
						{activeTab === 'Mis datos' && <p className="card-text">Explora y edita tus datos personales aquí</p>}
						{activeTab === 'Suscripción' && <p className="card-text">Conoce y edita las condiciones de tu suscripción</p>}
						{activeTab === 'Envíos' && <p className="card-text">Sigue aquí tus pedidos</p>}
					</div>
				</div>
			</div>
		</div>

		) : (

			<div className="row m-5 justify-content-center">
				<div className="col-8 m-5 text-center">
					<div class="alert alert-warning" role="alert">
					¡Inicia Sesión para acceder a tu área privada!
					</div>

					<div className="row justify-content-center">
						<div className="col-8 m-3">
							<Link to="/"><button type="button" class="btn btn-warning mx-2">Iniciar Sesión</button></Link>
							<Link to="/signup"><button type="button" class="btn btn-warning mx-2" >¡Regístrate!</button></Link>
						</div>
					</div>
				</div>
			</div>

		)}

		</div>
	);
};
