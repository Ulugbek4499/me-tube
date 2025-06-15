import { Card, CardContent, CardMedia } from '@mui/material'
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
			/>
		</Card>
	)
}

export default VideoCard
