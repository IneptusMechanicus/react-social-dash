import React from "react";
import "./panel.scss";

export const Panel = (props) => {
	return (
		<div className="panel">
			<ul className="header">
				<span className="title">{props.title}</span>
				<button className="panel-toggle button dark">X</button>
			</ul>
			<div className="main">
				{props.main.map(link => <li key={link.title} >{link.title}</li>)}
			</div>
			<div className={"footer " + props.footer.class}>
				{props.footer.content}
			</div>
		</div>
	)
}