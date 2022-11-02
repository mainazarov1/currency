import { useDispatch, useSelector } from "react-redux"
import styles from './Valute.module.scss'
import { ValuteItem } from "./ValuteItem";

export const Valute = ({valute}) => {
	const dispatch = useDispatch()
	// const [valuteValue, setValuteValue] = useState()
	// const currencyCount = (mainValute) => {
	// 	if (mainValute === 'RUB') {
	// 		setValuteValue(1)
	// 	} else {
	// 		setValuteValue(2)
	// 	}
	// }

	return (
		<div className={styles.valute}>
			<h2>Курсы валют</h2>
			<ul className={styles.valute__list}>
				{valute && Object.entries(valute).map(([key, item], index) => {
					return <ValuteItem key={item.ID} valute={item} />
				})}
			</ul>
		</div>
	)
}