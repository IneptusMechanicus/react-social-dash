import React from "react";
import "./edit.scss";

import {Form, Field} from "./../form/form";
export const Edit = () => {
	
	return (
		<div className="post-edit">
			<form id="postEdit">
				<span className="error-message"></span>
				<div className="form-section">
					<Field type="text" name="title" title="Title" fieldClass="expand-text" />
					<Field type="text" name="summary" title="Summary" fieldClass="expand-text" />
				</div>
				<div className="form-section">
					<textarea className="field-text area" htmlFor="postEdit"></textarea>
					<select name="status" className="field-text" id="cars">
						<option value="draft">Draft</option>
						<option value="private">Private</option>
						<option value="public">Public</option>
					</select>
				</div>
				<input type="submit" className="submit primary"></input>
			</form>
		</div>
	)
}