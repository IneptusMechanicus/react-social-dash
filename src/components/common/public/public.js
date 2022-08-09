import React from "react";
import {Panel} from "./../panel/panel";

export const Public = (props) => {
	return (
		<div className="viewport-main random">
			{props.title && <h1 className="public-title">{props.title}</h1>}
			{props.children}
		</div>
	)
}