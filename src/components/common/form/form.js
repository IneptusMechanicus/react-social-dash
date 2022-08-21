import "./form.scss";
import React from "react";

export const Form = (props) => {
	return (
		<div className="form" id={props.formId}>
			<form className={props.formClass} onSubmit={props.onSubmit}>
				{props.children}
				<div className="submit">
					<input type="submit" className="button dark hover-primary text-normal"></input>
				</div>
			</form>
		</div>
	)
}


export const Field = (props) => {
	return (
		<div className={"field " + props.fieldClass}>
			<input 
				className={"field-" + props.type}
				type={props.type}
				id={props.id}
				name={props.name}
				defaultValue={props.fieldValue}
				onChange={props.changeHandler}
				placeholder={props.title}
			></input>
			<span className="error-message"></span>
		</div>
	)
}