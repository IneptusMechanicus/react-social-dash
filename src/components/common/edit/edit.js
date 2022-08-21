import React from "react";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import "./edit.scss";

import * as postService from "./../../../services/post"
import {AuthContext} from "./../../../contexts/auth"

import {Form, Field} from "./../form/form";
export const Edit = (props) => {
	const {post_id} = useParams("post_id");
	const {user} = useContext(AuthContext);
	const [title, setTitle] = useState();
	const [summary, setSummary] = useState();
	const [content, setContent] = useState();
	const [status, setStatus] = useState();
	
	const titleChangeHandler = (e) => {
		console.log(e.target.value);
	}
	const summaryChangeHandler = (e) => {
		console.log(e.target.value);
	}
	const contentChangeHandler = (e) => {
		console.log(e.target.value);
	}
	const statusChangeHandler = (e) => {
		console.log(e.target.value);
	}
	
	useEffect(() => {
			if(post_id) {
				postService.getPost(user.id, post_id).then(result => {
					setTitle(result.response.title);
					setSummary(result.response.summary);
					setContent(result.response.content);
					setStatus(result.response.status);
				});
			} else {
				setTitle('');
				setSummary('');
				setContent('');
				setStatus('');
			}
	}, [props.mode]);
	
	return (
		<div className="post-edit">
			<form id="postEdit">
				<span className="error-message"></span>
				<div className="form-section">
					<Field type="text" name="title" title="Title" fieldValue={title} changeHandler={titleChangeHandler} fieldClass="expand-text" />
					<Field type="text" name="summary" title="Summary" fieldValue={summary} changeHandler={summaryChangeHandler} fieldClass="expand-text" />
				</div>
				<div className="form-section">
					<textarea className="field-text area" htmlFor="postEdit" onChange={contentChangeHandler} defaultValue={content}></textarea>
					<select name="status" className="field-text" id="cars" defaultValue={status} onChange={statusChangeHandler}>
						<option value="draft">Draft</option>
						<option value="private">Private</option>
						<option value="public">Public</option>
					</select>
				</div>
				{console.log(status)}
				<input type="submit" className="submit primary"></input>
			</form>
		</div>
	)
}