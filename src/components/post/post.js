import React from "react";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import "./post.scss"

import * as postService from "./../../services/post"
import {AuthContext} from "./../../contexts/auth"

export const Post = () => {
	const { post_id } = useParams("post_id");
	const {user} = useContext(AuthContext);
	const [postData, setPostData] = useState([]);
	
	useEffect(() => {
			postService.getPost(user.id, post_id).then(result => {
				setPostData(result.response);
			});
	}, []);
	
	return (
		<div className="post">
			<h1 className="title">{postData.title}</h1>
			<h3 className="title summary">{postData.summary}</h3>
			<p className="content">{postData.content}</p>
			<span className="author">{postData.author}</span>
		</div>
	)
}