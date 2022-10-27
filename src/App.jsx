import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Converter } from './components/Converter/Converter'
import { SideBar } from './components/SideBar/SideBar'
import { Valute } from './components/Valute/Valute'
import { getValute } from './store/features/valuteSlice'
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getValute())
	}, [])
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<SideBar />}>
					<Route path='/valute' element={<Valute />} />
					<Route path='/converter' element={<Converter />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
