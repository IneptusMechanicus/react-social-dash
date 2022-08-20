import React from "react";

import {Form, Field} from "./../common/form/form";
import {Public} from "./../common/public/public";

export const Register = () => {
	return (
		<Public title="Create an account">
			<Form formClass="register">
				<Field type="text" title="Username" fieldClass="" />
				<Field type="text" title="First Name" fieldClass="" />
				<Field type="text" title="Last Name" fieldClass="" />
				<Field type="password" title="Password" fieldClass="" />
				<Field type="password" title="Confirm Password" fieldClass="" />
				<Field type="email" title="Email" fieldClass="" />
			</Form>
		</Public>
	)
}