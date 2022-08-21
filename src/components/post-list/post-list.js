import React from "react";
import {useState, useContext, useEffect} from "react"
import {Public} from "./../common/public/public";
import {PostItem} from "./../common/post-item/post-item";

import * as postService from "./../../services/post"
import {AuthContext} from "./../../contexts/auth"

export const PostList = () => {
	
	const [posts, setPosts] = useState([]);
	const { user, isAuthenticated } = useContext(AuthContext);
	
	useEffect(() => {
			postService.getList("own", user.id).then(result => {
				setPosts(result.response);
			})
	}, [])
	return(
		<Public title="Post List">
			<h3 className= "sub-title"> Welcome back, {user.first_name} !</h3>
			{posts.map(post => 
				<PostItem
					key={post.post_id}
					post_id={post.post_id}
					title={post.title}
					summary={post.summary}
					status={post.status}
					published={post.published}
					author={post.author}
				/>
			)}
		</Public>
	)
}