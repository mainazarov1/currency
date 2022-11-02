import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import { useDispatch, useSelector } from "react-redux";
import { changeMainValue, changeSecondaryValue, changeSelectValute, changeValutes } from "../../store/features/currencySlice";
import { InputApp } from "../InputApp/InputApp";
import { SelectApp } from "../SelectApp/SelectApp";
import styles from './Converter.module.scss';
export const Converter = ({ valute }) => {
	const dispatch = useDispatch()
	const { mainValute, secondaryValute, mainValue, secondaryValue } = useSelector((state) => state.currency);

	const handleChangeCurrencyValutes = () => {
		dispatch(changeValutes())
	}
	const handleSelectChange = (e) => {
		dispatch(changeSelectValute({ name: e.target.name, value: e.target.value }))
	}
	useEffect(() => {
		dispatch(changeSecondaryValue({ mainValue, mainValute: valute[mainValute], secondaryValute: valute[secondaryValute] }))
	}, [mainValute, secondaryValute, mainValue])
	return (
		<div className={styles.converter}
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '20px',
			}}
		>
			<div className={styles.converter__container}>
				<h4>{valute[mainValute]?.Name}</h4>
				<div className={styles.converter__content}>
					<SelectApp
						name="mainValute"
						value={mainValute}
						handleChange={handleSelectChange}
						valute={valute}
					/>
					<InputApp
						handleChange={(e) => dispatch(changeMainValue(e.target.value))}
						placeholder='Add number'
					/>
				</div>
			</div>
			<IconButton
				onClick={handleChangeCurrencyValutes}
				
			>
				<MultipleStopIcon />
			</IconButton>
			<div className={styles.converter__container}>
				<h4>{valute[secondaryValute]?.Name}</h4>
				<div className={styles.converter__content}>
					<SelectApp
						name="secondaryValute"
						value={secondaryValute}
						handleChange={handleSelectChange}
						valute={valute}
					/>
					<InputApp
						value={+secondaryValue || ''}
						handleChange={(e) => dispatch(changeSecondaryValue(e.target.value))}
						placeholder='Полученная сумма'
					/>
				</div>
			</div>
		</div>
	)
}