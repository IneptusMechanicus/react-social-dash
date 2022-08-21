import React from "react";
import {lazy, Suspence, useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "./app.scss";

// --- Common
import {Panel} from "./components/common/panel/panel";
import {PrivateRoute} from "./components/common/private-route/private-route";
// --- "Page" Components
import {Home} from "./components/home/home";
import {Login} from "./components/login/login";
import {Register} from "./components/register/register";
import {NotFound} from "./components/error/404"
import {Post} from "./components/post/post"
import {Dashboard} from "./components/common/dashboard/dashboard";
// --- Contexts
import {useAuthContext} from './contexts/auth';
import {useLocalStorage} from "./hooks/local-storage";


const App = () => {
	const { isAuthenticated } = useAuthContext();
	
	const defaultFooterContent = [
		{"title": "Login", "path": "/login", "className": "footer-item hover-primary"},
		{"title": "Sign Up", "path": "/register", "className": "footer-item hover-info"},
	];
	
	const userFooterContent = [
		{"title": "Profile", "path": "/profile", "className": "footer-item hover-primary"},
		{"title": "Logout", "path": "/logout", "className": "footer-item hover-danger"},
	];
	
	const [footerContent, setFooterContent] = useState(defaultFooterContent);
	

	useEffect(() => {
		isAuthenticated ? setFooterContent(userFooterContent) : setFooterContent(defaultFooterContent);
	}, [isAuthenticated])
	
	return (
		<div className="viewport">
			<div className="viewport-side">
				<Panel title="Main Menu"
					toggleIcon="fas fa-greater-than"
					panelClass="public"
					items={[
						{"title": "Home", "path": "/", "icon": "fas fa-house"},
						{"title": "Dashboard", "path": "/dashboard/posts", "icon": "fas fa-gauge"},
					]}
					footer={footerContent}
				/>
			</div>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/404" element={<NotFound />} />
				<Route element={<PrivateRoute />}>
					<Route path="/post/view/:post_id" element={<Post />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App;