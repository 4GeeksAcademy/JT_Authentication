import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import chica from "../../img/chica.jpg";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [activeTab, setActiveTab] = useState('Mis datos'); 
	
	const handleTabClick = (tab) => {
		setActiveTab(tab); 
		};


	return (
		
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
	);
};
