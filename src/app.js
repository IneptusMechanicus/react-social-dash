import React from "react";
import {lazy, Suspence} from "react";
import {Routes, Route} from "react-router-dom";
import "./app.scss";

// --- Common
import {Panel} from "./components/common/panel/panel";
import {PrivateRoute} from "./components/common/private-route/private-route";
// --- "Page" Components
import {Home} from "./components/home/home";
import {Login} from "./components/login/login";
import {Dashboard} from "./components/common/dashboard/dashboard";
// --- Contexts
import {useAuthContext, AuthProvider} from './contexts/auth';
// --- Lazy Load
const Register = lazy(() => import('./components/register/register'));


const App = () => {
	const isAuthenticated = useAuthContext();
	
	let footerContent = [
		{"title": "Login", "path": "/login", "className": "footer-item hover-primary"},
		{"title": "Sign Up", "path": "/register", "className": "footer-item hover-info"},
	]
	
	if(isAuthenticated) {
		footerContent = [
			{"title": "Profile", "path": "/profile", "className": "footer-item hover-primary"},
			{"title": "Logout", "path": "/logout", "className": "footer-item hover-danger"},
		]
	}
	
	return (
		<AuthProvider>
			<div className="viewport">
				<div className="viewport-side">
					<Panel title="Main Menu"
						toggleIcon="fas fa-greater-than"
						panelClass="public"
						items={[
							{"title": "Home", "path": "/", "icon": "fas fa-house"},
							{"title": "Dashboard", "path": "dashboard", "icon": "fas fa-gauge"},
						]}
						footer={footerContent}
					/>
				</div>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route element={<PrivateRoute />}>
						<Route path="/dashboard/*" element={<Dashboard />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</AuthProvider>
	)
}

export default App;