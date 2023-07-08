import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
		
		</>
	
	);
};


