import { Outlet } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation"
import styles from './SideBar.module.scss'

export const SideBar = () => {
	return (
		<div
			className={styles.sidebar}
			>
			<Navigation />
			<div
				className={styles.sidebar__content}
				style={{
				padding: '20px',
			}}>
				<Outlet />
			</div>
		</div>
	)
}
