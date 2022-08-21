import React from "react";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";
import {AuthContext} from "./../../contexts/auth";
import * as auth from "./../../services/auth";

export const Register = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const { userLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	
	const registerHandler = (e) => {
		e.preventDefault();
		
		const {
			username,
			email,
			password,
			first_name,
			last_name
		} = Object.fromEntries(new FormData(e.target));
		auth.register(username, email, password, first_name, last_name).then(result => {
			if(result.status == 200) {
				userLogin(result.response);
				navigate('/dashboard/posts');
			} else {
				setErrorMessage(result.response.message);
			}
		}).catch(() => {
			navigate('/404');
		});
	}
	return (
		<Public title="Create an account">
			<Form formClass="register">
				<div className="form-section">
					<Field type="text" name="username" title="Username" fieldClass="" />
					<Field type="email" name="email" title="Email" fieldClass="" />
				</div>
				<div className="form-section">
					<Field type="text" name="first_name" title="First Name" fieldClass="" />
					<Field type="text" name="last_name" title="Last Name" fieldClass="" />
				</div>
				<div className="form-section">
					<Field type="password" name="password" title="Password" fieldClass="" />
				</div>
			</Form>
		</Public>
	)
}