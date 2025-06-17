import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'

const Search = () => {
	const [videos, setVideos] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
				setVideos(data.item)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])

	return <div>Search</div>
}

export default Search
