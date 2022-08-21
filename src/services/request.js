const request = async (method, url, params, data) => {
	try {
		const user = localStorage.getItem('auth');
		const auth = JSON.parse(user || '{}');
		let headers = {}
		
		if (auth.token) {
			headers['Authorization'] = "Bearer " + auth.token;
		}
		
		console.log("Params:", data);

		if (Object.keys(params) !== 0) {
			url += "?" + new URLSearchParams(params).toString();
		}
		
		let requestStruct = {
			method: method,
			headers: {
				...headers,
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		}
		
		if(method == "GET")
			delete requestStruct.body;
		
		let request = fetch(url, requestStruct);	
		
		const response = await request;
		const result = await response.json();
		return {
			"status": response.status,
			"response":result
		};
	} catch (error) {
		console.log(error);
	}
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');