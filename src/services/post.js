import * as request from "./request";

const url = "http://localhost:5000/api/post";

export const createPost = (user_id) => 
	request.post(`${url}/`, {"user_id": user_id}, { user_id, title, summary, content, status });

export const updatePost = (user_id, post_id) =>
	request.post(`${url}/`, {"user_id": user_id}, {title, summary, content, status});
	
export const getPost = (user_id, post_id) =>
	request.post(`${url}/`, {"user_id": user_id}, {});

export const getList = (scope, user_id) =>
	request.post(`${url}/list`, {"scope": scoper"user_id": user_id}, {});