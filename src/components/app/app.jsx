import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Channel, Main, Navbar, Search, VideoDetail } from '../'

const App = () => {
	return (
		<Box>
			Navbar
			<Routes>
				<Navbar>
					<Route path='/' element={<Main />} />
					<Route path='/channel/:id' element={<Channel />} />
					<Route path='/video/:id' element={VideoDetail} />
					<Route path='/search/:id' element={Search} />
				</Navbar>
			</Routes>
		</Box>
	)
}

export default App
