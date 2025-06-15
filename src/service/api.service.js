import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': '944360db17msh725d03f5bf5901cp1be9e0jsn5afa5820c08c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)

		return response.data
	},
}
