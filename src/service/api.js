import axios from 'axios';

const baseUrl = 'https://reqres.in/';

const postApiCall = (endPoint, params, successCallBack, errorCallBack) => {
	axios
		.post(baseUrl + endPoint, params)
		.then((response) => {
			successCallBack(response);
		})
		.catch((err) => {
			errorCallBack(err);
		});
};

const getApiCall = (endPoint, params, successCallBack, errorCallBack) => {
	axios
		.get(baseUrl + endPoint, params)
		.then((response) => {
			successCallBack(response);
		})
		.catch((err) => {
			errorCallBack(err);
		});
};

const deleteApiCall = (endPoint, params, successCallBack, errorCallBack) => {
	axios
		.delete(baseUrl + endPoint + params)
		.then((response) => {
			successCallBack(response);
		})
		.catch((err) => {
			errorCallBack(err);
		});
};

export default {
	getApiCall,
	postApiCall,
	deleteApiCall
};
