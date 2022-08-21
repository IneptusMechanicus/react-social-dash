import React from "react";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";
import {AuthContext} from "./../../contexts/auth";
import * as auth from "./../../services/auth";

export const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const { userLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	
	const loginHandler = (e) => {
		e.preventDefault();
		const { username, password } = Object.fromEntries(new FormData(e.target));
		auth.login(username, password).then(result => {
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
		<Public title="Login to your account">
			<Form formClass="login" onSubmit = {loginHandler}>
				<span className="error-message">{errorMessage}</span>
				<Field type="text" name="username" title="Username" fieldClass="" />
				<Field type="password" name="password" title="Password" fieldClass="" />
			</Form>
		</Public>
	)
}