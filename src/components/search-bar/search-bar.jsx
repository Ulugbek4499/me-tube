import { Paper } from '@mui/material'
import { colors } from '../../constants/colors'

const SearchBar = () => {
	return (
		<Paper
			component={'form'}
			sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none' }}
		>
			<input placeholder='Search...' type='text' />
		</Paper>
	)
}

export default SearchBar
