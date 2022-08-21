import React, {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./panel.scss";

import { AuthContext } from '../../../contexts/auth';
import * as auth from '../../../services/auth';

export const Panel = (props) => {
	const navigate = useNavigate();
	const { user, userLogout, isAuthenticated } = useContext(AuthContext);

	const logoutHandler = (e) => {
		e.preventDefault();
		
		auth.logout(user.id).then(() => {
			userLogout();
			navigate('/');
		}).catch(() => {
			navigate('/');
		});
	}
	
	return (
		<div className={"panel " + props.panelClass}>
			<ul className="panel-header">
				<span className="panel-title">{props.title}</span>
				<button className="panel-toggle button hover-dark">
					<i className={props.toggleIcon}></i>
				</button>
			</ul>
			<div className="panel-main top-separator">
				{props.children}
				{props.items.map(item =>
					<NavLink className="nav-item" key={item.title} to={item.path}>
						<i className={item.icon}></i>{item.title}
					</NavLink>
				)}
			</div>
			<div className="panel-footer top-separator" >
				{Array.isArray(props.footer) ? props.footer.map((item) => {
					if (item.path == "/logout") {
						return <a className={item.className} key={item.title} onClick={logoutHandler}>
							<i className={item.icon}></i>{item.title}
						</a>
					} else {
						return <NavLink className={item.className} key={item.title} to={item.path}>
							{item.title}
						</NavLink>
					}
				}) : props.footer.content}
			</div>
		</div>
	)
}