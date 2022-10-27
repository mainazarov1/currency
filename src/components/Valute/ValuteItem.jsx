import { IconButton } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import StraightIcon from '@mui/icons-material/Straight';
import { useDispatch } from "react-redux";
import styles from './Valute.module.scss';
import { useEffect, useState } from "react";
import { changeValutes } from "../../store/features/currencySlice";

export const ValuteItem = ({ valute }) => {
	const dispatch = useDispatch();
	const [mainValuteValue, setMainValuteValue] = useState(1);
	const [secondaryValuteValue, setSecondaryValuteValue] = useState(1);
	const [changeStatus, setChangeStatus] = useState(false);
	const [exchangeRate, setExchangeRate] = useState(1);
	// const { mainValuteValue, secondaryValuteValue, changeStatus } = (state) => currency
	const handleChangeValutes = () => {
		// dispatch(changeValutes(valute))
		setChangeStatus(!changeStatus)
	}
	const changeValutes = () => {
		if (changeStatus) {
			setMainValuteValue('1 RUB');
			setSecondaryValuteValue(`${(
				1 /
				(valute?.Value / valute?.Nominal)
			).toFixed(4)} ${valute?.CharCode}`);
			setExchangeRate(1 / (valute?.Value / valute?.Nominal) -
			1 / (valute?.Previous / valute?.Nominal));
		} else {
			setMainValuteValue(`1 ${valute?.CharCode}`);
			setSecondaryValuteValue(`${(valute?.Value / valute?.Nominal).toFixed(4)} RUB`);
			setExchangeRate((valute?.Value - valute?.Previous) / valute?.Nominal);
		}
	}
	useEffect(() => {
		changeValutes();
	}, [changeStatus])

	return (
		<li className={styles.valute__item} key={valute.ID}>
			<h5>
				{valute.Name}
			</h5>
			<div className={styles.item__content}>
				<p>{mainValuteValue}</p>
				<IconButton
					onClick={handleChangeValutes}
				>
					<AutorenewIcon />
				</IconButton>
				<p>{secondaryValuteValue}</p>
				<div
					style={{
						position: 'relative',
						width: '100px',
					}}
				>
					<IconButton
						disabled
						style={{
							transform: exchangeRate.toFixed(4) > 0 ? 'rotate(0deg)' : 'rotate(180deg)',
							color: exchangeRate.toFixed(4) > 0 ? 'green' : 'red'
						}}>
						<StraightIcon />
					</IconButton>
					<span
						style={{
							color: exchangeRate.toFixed(4) > 0 ? 'green' : 'red'
						}}
					>
						{exchangeRate.toFixed(4)}
						{/* {valute.Value > valute.Previous ? `${valute.Value - valute.Previous}`.slice(0, 6) : `${valute.Previous - valute.Value}`.slice(0, 6)} */}
					</span>
				</div>
			</div>
		</li>
	)
}