import React from "react";
import "./post-item.scss"
export const PostItem = () => {
	return (
		<div className="post-item">
			<div className="section main">
				<div className="title-area">
					<span className="post-number dark">25</span>
					<h4 className="title">Example</h4>
				</div>
				<p className="summary">This is an example summary</p>
			</div>
			<div className="section post-info">
				<div>
					<span className="status status-public">Public</span>
					<span className="date">Sun, 21 Aug 2022 01:43:50 GMT</span>
					<span className="author">Ineptus Mechanicus</span>
				</div>
				<div>
					<a className="details dark hover-primary">View Post</a>
				</div>
			</div>
		</div>
	)
}