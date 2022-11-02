import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Converter } from './components/Converter/Converter'
import { SideBar } from './components/SideBar/SideBar'
import { Valute } from './components/Valute/Valute'
import { getValute } from './store/features/valuteSlice'
function App() {
	const dispatch = useDispatch();
	const { valute } = useSelector((state) => state.valute);
	useEffect(() => {
		dispatch(getValute())
	}, [])
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<SideBar />}>
					<Route path='/valute' element={<Valute valute={valute}/>} />
					<Route path='/converter' element={<Converter valute={valute} />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
