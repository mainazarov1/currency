import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import { InputApp } from "../Input/InputApp"
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../store/features/currencySlice";
export const Converter = () => {
	const dispatch = useDispatch()
	const { valute } = useSelector(state => state.valute)
	const { leftValue, rigthValue } = useSelector(state => state.currency)
	const [selectValue, setSelectValue] = useState()
	const [selectValue2, setSelectValue2] = useState()
	const [clickStatus, setClickStatus] = useState(false)
	const [inputValue, setInputValue] = useState(0)
	const [inputValue2, setInputValue2] = useState(0)
	const handleSelectChange = (e) => {
		console.log('TRIGGERED');
		setSelectValue(e.target.value)
		console.log(e.target.value);
	}
	useEffect(() => {
		if (clickStatus) {
			dispatch(setCurrency({ leftValue: 'AMD', rigthValue: 'USD' }))
		} else {
			dispatch(setCurrency({leftValue: 'RUB', rigthValue: 'KGS'}))
		}
	},[handleSelectChange])
	console.log(leftValue, ' = ', rigthValue);
	return (
		<div className="converter"
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '20px',
			}}
		>
			<InputApp valute={valute} handleSelectChange={handleSelectChange} />
			<IconButton
				onClick={() => {setClickStatus(!clickStatus)}}
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
			<InputApp valute={valute} handleSelectChange={handleSelectChange} />
		</div>
	)
}