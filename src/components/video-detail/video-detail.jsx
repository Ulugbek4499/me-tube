import { Tag } from '@mui/icons-material'
import { Box, Chip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(
					`videos?part=snippet,statistics&id=${id}`
				)

				setVideoDetail(data.items[0])
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [id])
	// const {
	// 	snippet: { title, channelId, channelTitle, description, tags, thumnails },
	// 	statistics: { viewCount, likeCount, commentCount },
	// } = videoDetail

	return (
		<Box minHeight={'90vh'} mb={10}>
			<Box display={'flex'}>
				<Box width={'75%'}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className='react-player'
						controls
					/>
					{videoDetail.snippet.tags.map((item, idx) => (
						<Chip
							label={item}
							key={idx}
							sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
							deleteIcon={<Tag />}
							onDelete={() => {}}
							variant='outlined'
						/>
					))}
					<Typography variant='h5' fontWeight={'bold'} p={2}>
						{videoDetail?.snippet?.title}
					</Typography>
					<Typography variant='subtitle2' p={2} sx={{ opacity: '.7' }}>
						{videoDetail?.snippet?.title}
					</Typography>
				</Box>
				<Box width={'25%'}>Suggested Video</Box>
			</Box>
		</Box>
	)
}

export default VideoDetail
