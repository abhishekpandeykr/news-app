import axios from 'axios';

const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const instance = axios.create({
	baseURL: 'https://newsapi.org/v2/',
});

instance.interceptors.request.use(
	config => {
		if (config.url === 'sources') {
			config.url = `${config.url}?apikey=${newsApiKey}`;
		} else {
			config.url = `${config.url}&apikey=${newsApiKey}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	response => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		if (response.status >= 200 && response.status <= 300) {
			return response.data;
		}
	},
	error => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default instance;
