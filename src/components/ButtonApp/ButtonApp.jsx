import { IconButton } from "@mui/material"
import styles from './ButtonApp.module.scss'
export const ButtonApp = ({ icon, label, style }) => {
	return (
		<button
			className={styles.button}
			style={style}
		>
			{/* <IconButton
				children={}
			/> */}
			
				{icon}
			<>
				{label}
			</>
		</button>
	)
}