import React from "react";
import {Routes, Route} from "react-router-dom";

import {Panel} from "./../panel/panel";

export const Dashboard = (props) => {
	return (
		<div className="viewport viewport-main">
			<div className="viewport-center">
				<Routes>
					<Route path="/" element={<h1>Overview</h1>} />
					<Route path="dash" element={<h1>Posts</h1>} />
				</Routes>
			</div>
			<div className="viewport-side">
				<Panel title="Dashboard"
					toggleIcon="fas fa-greater-than"
					items={[
						{"title": "Overview", "path": "", "icon": "fas fa-eye"},
						{"title": "Posts", "path": "dash", "icon": "fas fa-newspaper"},
					]}
					footer={{
						"class": "text",
						"content": "Social Dash \u00A9 No Rights Reserved"
					}}
				/>
			</div>
		</div>
	)
}