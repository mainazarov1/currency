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
			<div
				style={{
					backgroundColor: '#c3c3c3',
					borderRadius: '8px',
					padding: '3px',
			}}>
				{icon}
			</div>
			<>
				{label}
			</>
		</button>
	)
}