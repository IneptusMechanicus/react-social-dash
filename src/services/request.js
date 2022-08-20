const request = async (method, url, params, data) => {
	try {
		const user = localStorage.getItem('auth');
		const auth = JSON.parse(user || '{}');
		let headers = {}
		
		if (auth.token) {
			headers['Authorization'] = "Bearer " + auth.token;
		}
		
		console.log(method);
		
		if (Object.keys(params) !== 0) {
			console.log("adding params")
			url += "?" + new URLSearchParams(params).toString();
		}
		
		let requestStruct = {
			"method": method,
			"headers": {
				...headers,
				'content-type': 'application/json'
			}
		}
		
		if(method != "GET")
			requestStruct["body"] = JSON.stringify(data);
		
		let request = fetch(url, requestStruct);	

		const response = await request;
		const result = await response.json();
		
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');