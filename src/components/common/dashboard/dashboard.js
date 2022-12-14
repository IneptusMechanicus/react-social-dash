import React from "react";
import {Routes, Route, useParams} from "react-router-dom";

import {Panel} from "./../panel/panel";
import {Edit} from "./../edit/edit"
import {PostList} from "./../../post-list/post-list"

export const Dashboard = (props) => {
	return (
		<div className="viewport viewport-main">
			<div className="viewport-center">
				<Routes>
					<Route path="posts" element={<PostList />} />
					<Route path="post/new" element={<Edit mode="new"/>} />
					<Route path="post/edit/:post_id" element={<Edit mode="edit"/>} />
				</Routes>
			</div>
			<div className="viewport-side">
				<Panel title="Dashboard"
					toggleIcon="fas fa-greater-than"
					panelClass="dashboard"
					items={[
						{"title": "Post List", "path": "posts", "icon": "fas fa-newspaper"},
						{"title": "New Post", "path": "post/new", "icon": "fas fa-plus"},
					]}
					footer={{
						"class": "text",
						"content": "Social Dash \u00A9 No Rights Reserved"
					}}
				/>
			</div>
		</div>
	)
}