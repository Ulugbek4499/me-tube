import { Button, Stack, Container } from '@mui/material'

const App = () => {
	return (
		<Container variant=''>
			<Stack spacing={2} direction='row'>
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
			</Stack>
		</Container>
	)
}

export default App
