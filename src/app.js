import React from "react";
import {Routes, Route} from "react-router-dom";
import "./app.scss";

import {Home} from "./components/home/home";
import {Dashboard} from "./components/common/dashboard/dashboard";

const App = () =>{
	return (
		<Routes>
			<Route path="home" element={<Home />} />
			<Route path="dashboard" element={<Dashboard />} />
		</Routes>
	)
}

export default App;