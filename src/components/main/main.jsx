import { Box, Container, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Category } from '../'
import { colors } from '../../constants/colors'

const Main = () => {
	const [selectedCategory, setCategory] = useState('New')

	return (
		<Stack>
			<Category />
			<Box p={2} sx={{ height: '90vh' }}>
				<Container maxWidth='90%'>
					<Typography variant={'h4'} fontWeight={'bold'} mb={2}>
						{selectedCategory}
						<span style={{ color: colors.Secondary }}>Videos</span>
					</Typography>
					Videos
				</Container>
			</Box>
		</Stack>
	)
}

export default Main
