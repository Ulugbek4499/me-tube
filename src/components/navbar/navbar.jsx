import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'
import { logo } from '../../constants'
import { colors } from '../../constants/colors'

const Navbar = () => {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p='2'
			height={'10vh'}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 999,
				backgroundColor: colors.primary,
			}}
		>
			<Link to='/'>
				<img src={logo} alt='Me-Tube Logo' height={100} width={100} />
			</Link>
			<SearchBar />
			<Box />
		</Stack>
	)
}

export default Navbar
