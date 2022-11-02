import styles from './SelectApp.module.scss';
export const SelectApp = ({ name, value, valute, handleChange }) => {
	return (
		<select name={name}
			className={styles.selectApp}
			value={value}
			onChange={handleChange}
		>
			{valute && Object.entries(valute).map(([key, item], index) => {
				return <option key={key}
				>{key}</option>
			})}
		</select>
	)
}