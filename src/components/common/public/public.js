import React from "react";
import {Panel} from "./../panel/panel";

import "./public.scss";

export const Public = (props) => {
	return (
		<div className="viewport-main">
			<h1 className="title">{props.title}</h1>
			{props.children}
		</div>
	)
}