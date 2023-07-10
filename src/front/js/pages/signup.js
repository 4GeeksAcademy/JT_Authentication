import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../img/Mobile-login.jpg";

export const Signup = () => {
	
	const [ data, setData ] = useState({})
	const [ success, setSuccess ] = useState(false);
	const [ nombreUsuario, setNombreUsuario] = useState();

	const handleChange = (event) => {
		setData({...data, [event.target.id]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data);

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		}

        fetch(process.env.BACKEND_URL + "api/signup", config)
		.then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then(response => {
			if (response.Error) {
				console.log('Error:', response);
				alert(response.Error);
			} else	{
				console.log('Exito:', response);
				setSuccess(true);
				setNombreUsuario(response.name)
			}
        })
		.catch(error => {
			console.error('Error:', error);
		});
        }




	return (
		
		<>
		
		{ success ? (

				<div className="container my-5">
				<div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
					<h3 className="display-6">Registro exitoso</h3>
					<p className="col-10 mx-auto mb-3 fs-5 text-muted">
						<span id="textoResaltado">{nombreUsuario}</span>, te has registrado exitosamente en nuestra app!
					</p>
						<Link to="/">
							<button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
								Volver a inicio
							</button>
						</Link>
				</div>
				</div>

				) : (

		<div className="row d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
			<div className="card mb-3 shadow" style={{ maxWidth: '75%' }}>
				<div className="row g-0">
						<div className="col-md-4">
							<img src={login} className="img-fluid rounded-start" alt="Imagen registro"/>
						</div>
					<div className="col-md-8 d-flex align-items-center justify-content-center">
						<div className="card-body ">
							<h5 className="card-title titulo mb-3">Ingresa tus datos para registrarte</h5>
							<div className="form-floating mb-3">
								<input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" onChange={handleChange}/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="form-floating mb-3">
								<input type="nombre" className="form-control" id="name" placeholder="Nickname" onChange={handleChange}/>
								<label htmlFor="name">Nickname</label>
							</div>
							<div className="form-floating mb-3">
								<input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={handleChange}/>
								<label htmlFor="password">Contraseña</label>
							</div>
							
							<div className="d-grid d-md-flex justify-content-md-end">
							<button className="btn button_1" type="submit" onClick={handleSubmit}>Registrarme</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		)};

		</>

	);
};
