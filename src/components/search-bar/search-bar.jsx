import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { colors } from '../../constants/colors'

const SearchBar = () => {
	return (
		<Paper
			component={'form'}
			sx={{
				border: `1px solid ${colors.secondary}`,
				pl: 2,
				boxShadow: 'none',
				borderRadius: 'none',
			}}
		>
			<input placeholder='Search...' type='text' className='search-bar' />
			<IconButton>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar
