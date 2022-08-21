import {NavLink} from "react-router-dom";
import React from "react";
import "./post-item.scss"
export const PostItem = (props) => {
	return (
		<div className="post-item">
			<div className="section main">
				<div className="title-area">
					<span className="post-number dark">{props.post_id}</span>
					<h4 className="title">{props.title}</h4>
				</div>
				<p className="summary">{props.summary}</p>
			</div>
			<div className="section post-info">
				<div>
					<span className={"status status-"+props.status}>{props.status}</span>
					<span className="date">{props.published}</span>
					<span className="author">{props.author}</span>
				</div>
				<div>
					<NavLink to={"/post/view/"+props.post_id}className="details dark hover-primary">View Post</NavLink>
				</div>
			</div>
		</div>
	)
}