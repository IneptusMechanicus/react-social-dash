import React from "react";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";
import {AuthContext} from "./../../contexts/auth";
import * as auth from "./../../services/auth";

export const Login = () => {
	const { userLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	
	const loginHandler = (e) => {
		e.preventDefault();
		const { username, password } = Object.fromEntries(new FormData(e.target));
		auth.login(username, password).then(loginData => {
			userLogin(loginData);
			navigate('/dashboard');
		}).catch(() => {
			navigate('/404');
		});
	}
	
	return (
		<Public title="Login to your account">
			<Form formClass="login" onSubmit = {loginHandler}>
				<Field type="text" name="username" title="Username" fieldClass="" />
				<Field type="password" name="password" title="Password" fieldClass="" />
			</Form>
		</Public>
	)
}