import React from "react";
import "./panel.scss";

export const Panel = (props) => {
	return (
		<div className="panel">
			<ul className="header">
				<span>{props.title}</span>
				<button>X</button>
			</ul>
			<hr></hr>
			<ul className="main">
				{props.mainContent.map(x => 
					<li>{x}</li>
				)}
			</ul>
			<hr></hr>
			<ul className="footer">

			</ul>
		</div>
	)
}