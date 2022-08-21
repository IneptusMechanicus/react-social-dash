import * as request from "./request";

const url = "http://localhost:5000/api/post";

export const createPost = (owner_id, title, summary, content, status) => 
	request.post(`${url}`, {"user_id": owner_id}, { owner_id, title, summary, content, status });

export const updatePost = (user_id, post_id, title, summary, content, status) =>
	request.put(`${url}`, {"user_id": user_id, "post_id": post_id}, {title, summary, content, status});
	
export const getPost = (user_id, post_id) =>
	request.get(`${url}`, {"user_id": user_id, "post_id": post_id}, {});

export const getList = (scope, user_id) =>
	request.get(`${url}/list`, {"scope": scope, "user_id": user_id}, {});