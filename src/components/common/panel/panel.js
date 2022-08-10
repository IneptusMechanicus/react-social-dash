import React from "react";
import {NavLink} from "react-router-dom";
import "./panel.scss";

export const Panel = (props) => {
	return (
		<div className="panel">
			<ul className="panel-header">
				<span className="panel-title">{props.title}</span>
				<button className="panel-toggle button hover-info">
					<i className={props.toggleIcon}></i>
				</button>
			</ul>
			<div className="panel-main">
				{props.children}
				{props.items.map(item =>
					<NavLink className="nav-item hover-info" key={item.title} to={item.path}>
						<i className={item.icon}></i>{item.title}
					</NavLink>
				)}
			</div>
			<div className="panel-footer" >
				{Array.isArray(props.footer) ? props.footer.map(item =>
					<NavLink className={item.className} key={item.title} to={item.path}>
						{item.title}
					</NavLink>
				) : props.footer.content}
			</div>
		</div>
	)
}