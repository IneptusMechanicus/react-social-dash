import React from "react";
import {Panel} from "./../panel/panel";

export const Dashboard = (props) => {
	return (
		<div className="viewport-main">
			<div className="viewport-center">
				This is the place for dashboard stuff
			</div>
			<div className="viewport-side">
				<Panel title="Dashboard"
					toggleIcon="fas fa-greater-than"
					items={[
						{"title": "Home", "path": "/", "icon": "fas fa-house"},
						{"title": "Dashboard", "path": "dashboard", "icon": "fas fa-gauge"},
					]}
					footer={{"class": "text"}} />
			</div>
		</div>
	)
}