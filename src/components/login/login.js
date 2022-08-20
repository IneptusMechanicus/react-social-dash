import React from "react";

import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";

export const Login = () => {
	const { userLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	
	const submitHandler = (e) => {
		e.preventDefault();
		const {
			email,
			password,
		} = Object.fromEntries(new FormData(e.target));
	}
	
	return (
		<Public title="Login to your account">
			<Form formClass="login" onSubmit = {loginHandler}>
				<Field type="text" title="Username" fieldClass="" />
				<Field type="password" title="Password" fieldClass="" />
			</Form>
		</Public>
	)
}