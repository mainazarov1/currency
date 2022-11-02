import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
export const Converter = ({ valute }) => {
	const [mainValute, setMainValute] = useState('USD')
	const [secondaryValute, setSecondaryValute] = useState('KGS')
	const [mainValue, setMainValue] = useState()
	const [secondaryValue, setSecondaryValue] = useState()
	const handleChangeCurrencyValutes = () => {
		console.log('change')
		let temp = mainValute
		setMainValute(secondaryValute)
		setSecondaryValute(temp)
		// handleSelectChange()
	}
	const handleSelectChange = () => {
		// setMainValute(JSON.parse(e.target.value))
	}
	useEffect(() => {
		let tempValue = +mainValue * ((valute[mainValute]?.Value / valute[mainValute]?.Nominal) / (valute[secondaryValute]?.Value / valute[secondaryValute]?.Nominal))
		setSecondaryValue(tempValue)
	}, [mainValute, secondaryValute, mainValue])
	console.log(mainValute, secondaryValute);
	return (
		<div className="converter"
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '20px',
			}}
		>
			<div>
				<h4>{valute[mainValute]?.Name}</h4>
				<div>
					<select name="mainValute" id=""
						value={mainValute}
						onChange={(e) => {
							setMainValute(e.target.value)
						}}
					>
						{valute && Object.entries(valute).map(([key, item], index) => {
							return <option key={key}
							>{key}</option>
						})}
					</select>
					<input type="number" min={0}
						onChange={(e) => setMainValue(e.target.value)}
						value={mainValue}
						placeholder='Add number'
					/>
				</div>
			</div>
			<IconButton
				onClick={handleChangeCurrencyValutes}
				sx={{
					height: '50px',
					borderRadius: '50%',
					color: 'white',
					backgroundColor: 'black',
					'&:hover': {
						backgroundColor: 'green',
						color: 'black',
					}
				}}
			>
				<MultipleStopIcon />
			</IconButton>
			<div>
				<h4>{valute[secondaryValute]?.Name}</h4>
				<div>
					<select name="secondaryValute" id=""
						// onChange={handleSelectChange}
						onChange={(e) => {
							console.log(e.target.value);
							setSecondaryValute(e.target.value)
						}}
						value={valute[secondaryValute]?.CharCode}
					>
						{valute && Object.entries(valute).map(([key, item], index) => {
							return <option key={key}
							>{key}</option>
						})}
					</select>
					<input type="number" min={0}
						disabled
						value={secondaryValue}
						placeholder='Add number'
						onChange={(e) => setSecondaryValue(e.target.value)}
					/>
				</div>
			</div>
		</div>
	)
}