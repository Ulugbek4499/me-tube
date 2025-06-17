import { IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../constants/colors'

const SearchBar = () => {
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		if (value) {
			navigate(`/search/${value}`)
			setValue('')
		}
	}

	return (
		<Paper
			component={'form'}
			onSubmit={submitHandler}
			sx={{
				border: `1px solid ${colors.secondary}`,
				pl: 2,
				boxShadow: 'none',
				borderRadius: 'none',
			}}
		>
			<input
				placeholder='Search...'
				type='text'
				className='search-bar'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<IconButton type='submit'>
				<i className='fa-solid fa-magnifying-glass'></i>
			</IconButton>
		</Paper>
	)
}

export default SearchBar
