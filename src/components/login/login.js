import React from "react";

import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";

export const Login = () => {
	return (
		<Public title="Login to your account">
			<Form formClass="login">
				<Field type="text" title="Username" fieldClass="" />
				<Field type="password" title="Password" fieldClass="" />
			</Form>
		</Public>
	)
}