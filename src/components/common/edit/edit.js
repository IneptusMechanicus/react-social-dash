import React from "react";
import {useState, useEffect, useContext} from "react";
import {useParams, useNavigate} from "react-router-dom";
import "./edit.scss";

import * as postService from "./../../../services/post"
import {AuthContext} from "./../../../contexts/auth"

import {Form, Field} from "./../form/form";
export const Edit = (props) => {
	const {post_id} = useParams("post_id");
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();
	
	const [title, setTitle] = useState();
	const [summary, setSummary] = useState();
	const [content, setContent] = useState();
	const [status, setStatus] = useState();
	const [errorMessage, setErrorMessage] = useState();
	
	const titleChangeHandler = (e) => {
		setTitle(e.target.value);
		console.log(e.target.value);
	}
	const summaryChangeHandler = (e) => {
		setSummary(e.target.value);
		console.log(e.target.value);
	}
	const contentChangeHandler = (e) => {
		setContent(e.target.value);
		console.log(e.target.value);
	}
	const statusChangeHandler = (e) => {
		setStatus(e.target.value);
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
	
	const submitHandler = (e) => {
		e.preventDefault();
		
		if(props.mode == "new") {
			if(title == '' || summary == '' || content == '' || status == '') {
				setErrorMessage("All fields must be filled before posting!");
			} else {
				postService.createPost(user.id, title, summary, content, status).then(result => {
					if(result.status == 200) {
						navigate('/dashboard/posts');
					} else {
						setErrorMessage(result.response.message);
					}
				})
			}
		} else {
			postService.updatePost(user.id, post_id, title, summary, content, status).then(result => {
				if(result.status == 200) {
					navigate('/dashboard/posts');
				} else {
					setErrorMessage(result.response.message);
				}
			})
		}
	}
	
	return (
		<div className="post-edit">
			<form id="postEdit" onSubmit={submitHandler}>
				<span className="error-message">{errorMessage}</span>
				<div className="form-section">
					<Field type="text" name="title" title="Title" fieldValue={title} changeHandler={titleChangeHandler} fieldClass="expand-text" />
					<Field type="text" name="summary" title="Summary" fieldValue={summary} changeHandler={summaryChangeHandler} fieldClass="expand-text" />
				</div>
				<div className="form-section">
					<textarea className="field-text area" htmlFor="postEdit" onChange={contentChangeHandler} defaultValue={content}></textarea>
					<select name="status" className="field-text" defaultValue={status} onChange={statusChangeHandler}>
						<option></option>
						<option value="draft">Draft</option>
						<option value="private">Private</option>
						<option value="public">Public</option>
					</select>
				</div>
				<input type="submit" className="submit primary"></input>
			</form>
		</div>
	)
}