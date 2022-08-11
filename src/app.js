import React from "react";
import {Routes, Route} from "react-router-dom";
import "./app.scss";

import {Panel} from "./components/common/panel/panel";
import {Home} from "./components/home/home";
import {Dashboard} from "./components/common/dashboard/dashboard";

const App = () => {
	return (
		<div className="viewport">
			<div className="viewport-side">
				<Panel title="Main Menu"
					toggleIcon="fas fa-greater-than"
					panelClass="public"
					items={[
						{"title": "Home", "path": "/", "icon": "fas fa-house"},
						{"title": "Dashboard", "path": "dashboard", "icon": "fas fa-gauge"},
					]}
					footer={[
						{"title": "Login", "path": "login", "className": "footer-item hover-primary"},
						{"title": "Sign Up", "path": "register", "className": "footer-item hover-info"},
					]}
				/>
			</div>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="dashboard/*" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App;