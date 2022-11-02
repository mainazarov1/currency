import styles from './InputApp.module.scss';
export const InputApp = ({ value, handleChange, placeholder }) => {
	
	return (
		<div className={styles.inputApp}>
			
			<input type="number" min={0}
				className={styles.inputApp__input}
				onChange={handleChange}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	)
}