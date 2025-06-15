import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import moment from 'moment'
import { colors } from '../../constants/colors'

const VideoCard = ({ video }) => {
	return (
		<Card sx={{ widt: '320px', boxShadow: 'none', borderRadius: 0 }}>
			<CardMedia
				image={video?.snippet?.thumbnails?.high?.url}
				alt={video?.snippet?.title}
				sx={{ width: '360px', height: '180px' }}
			/>
			<CardContent
				sx={{
					background: colors.primary,
					height: '200px',
					position: 'relative',
				}}
			>
				<Typography my={'5px'} sx={{ opacity: '.4' }}>
					{moment(video?.snippet?.publishedAt).fromNow()}
				</Typography>
				<Typography>{video?.snippet?.title}</Typography>
			</CardContent>
		</Card>
	)
}

export default VideoCard
