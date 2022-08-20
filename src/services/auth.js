import * as request from "./request";

const url = "http://localhost:5000/api/user";

export const login = (username, password) => 
	request.get(`${url}/login`, { username, password }, {});


export const logout = (id) =>
	request.post(`${url}/logout`, {"user_id": id}, {});

export const register = (email, password) =>
	request.post(`${baseUrl}/register`, {}, {email, password});