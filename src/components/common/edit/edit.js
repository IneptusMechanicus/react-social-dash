import React from "react";

import {Form, Field} from "./../form/form";
export const Edit = () => {
	return (
		<Form formClass="post-modify" >
			<span className="error-message"></span>
			<Field type="text" name="first_name" title="First Name" fieldClass="" />
			<Field type="text" name="last_name" title="Last Name" fieldClass="" />
			<div className="form-section">
				<textarea></textarea>
			</div>
			<div className="form-section">
				<Field type="password" name="password" title="Password" fieldClass="" />
			</div>
		</Form>
	)
}