const BASE_URI = 'https://youtube-v31.p.rapidapi.com/'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_PUBLIC_API_KEY,
		'x-rapidapi-host': BASE_URI,
	},
}

export const ApiService = {
	async fetching() {},
	async login() {},
}
