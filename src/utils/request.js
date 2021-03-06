import fetcher from 'isomorphic-fetch';

export const DEFAULT_OPTIONS = {
	mode: 'cors',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
  credentials: 'same-origin',
};

export const BACKEND_URL = 'https://dbtry-mongo-db.herokuapp.com';

class Request {
	fetch = (url, method = 'GET', rawBody = null) =>
		new Promise((resolve, reject) => {
			if (!url) {
				reject(new Error('URL parameter required'));
			}

			const options = { ...DEFAULT_OPTIONS, method };

			if (rawBody) {
				options.body = JSON.stringify(rawBody);
			}

      fetcher(`${BACKEND_URL}${url}`, options)
				.then(response => {
					const contentType = response.headers.get('content-type');

					if (contentType.includes('application/json')) {
						return response.json();
					}

					if (!response.ok) {
						return {
							error: response.statusText,
						};
					}

					return {};
				})
				.then(jsonResponse => {
					if (jsonResponse.error) {
						reject(jsonResponse.error);
					} else {
						resolve(jsonResponse);
					}
				})
				.catch(reject);
		});
}

export default new Request();
