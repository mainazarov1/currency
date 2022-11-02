import styles from './InputApp.module.scss';
export const InputApp = ({ valute, value, clickStatus, handleSelectChange }) => {
	const handleChange = (value) => {
		console.log(value);
		if (clickStatus) {
			handleSelectChange(value)
		} else {
			handleSelectChange(event);
		}
	}
	return (
		<div className={styles.inputApp}>
			<select id="" className={styles.inputApp__select}
				onChange={() => handleChange(value)}
			>
				{valute && Object.entries(valute).map(([key, item], index) => {
					return <option key={item.ID}
						value={JSON.stringify(item)}
					>{item.CharCode}</option>
				})}
			</select>
			<input type="number" min={0}
				className={styles.inputApp__input}
				name={name}
			// onChange={(e) => handleInputChange(e)}
			/>
		</div>
	)
}