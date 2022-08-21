import * as request from "./request";

const url = "http://localhost:5000/api/user";

export const login = (username, password) => 
	request.post(`${url}/login`, {}, { username, password });

export const logout = (id) =>
	request.post(`${url}/logout`, {"user_id": id}, {});

export const register = (username, email, password, first_name, last_name) =>
	request.post(`${url}/register`, {}, {username, email, password, first_name, last_name});