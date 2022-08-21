import React from "react";
import {Public} from "./../common/public/public";
import {PostItem} from "./../common/post-item/post-item";
import {Post} from "./../post/post";
export const Home = () => {
	return(
		<Public title="Home">
			<h3 className= "sub-title"> Welcome to social dash! Here's what's on the board:</h3>
			<PostItem/>
		</Public>
	)
}