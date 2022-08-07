import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import "./app.scss";

import {Panel} from "./components/common/panel/panel";
import {Home} from "./components/home/home";
import {Dashboard} from "./components/common/dashboard/dashboard";

const App = () => {
	return (
		<div className="app">
			<div className="viewport-side">
				<Panel title="Main Menu"
					toggleIcon="fas fa-greater-than"
					items={[
						{"title": "Home", "path": "/", "icon": "fas fa-house"},
						{"title": "Dashboard", "path": "dashboard", "icon": "fas fa-gauge"},
					]}
					footer={{"class": "text", "content": "Footer text"}} />
			</div>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App;