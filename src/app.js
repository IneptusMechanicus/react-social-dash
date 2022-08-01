import React from "react";
import "./app.scss";

import {Panel} from "./components/panel/panel";

const App = () =>{
	return (
		<div className="app">
			<div className="viewport-left">
				<Panel title="Dashboard"
					mainContent={[
						"Overview",
						"Posts",
						"Analytics",
						"Connected Accounts",
						"Account Settings"
					]}
				/>
			</div>
			<div className="viewport-center">

			</div>
			<div className="viewport-right">
				{/* <Panel title="Options"
					mainContent={[
						"Overview",
						"Posts",
						"Analytics",
						"Connected Accounts",
						"Account Settings"
					]}
				/> */}
			</div>
		</div>
	)
}

export default App;