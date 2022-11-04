import { NavLink } from 'react-router-dom'
import { ButtonApp } from '../ButtonApp/ButtonApp'
import styles from './Navigation.module.scss'
import ListIcon from '@mui/icons-material/List';
export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<h1>CURRENCY</h1>

			<NavLink to='' end
				className='nav__link'
				children={({ isActive }) => (
					<ButtonApp
						style={{
							color: isActive ? '#6667AB' : '#6667AB',
						}}
						icon={<ListIcon
							style={{
								padding: '3px',
								borderRadius: '3px',
								backgroundColor: isActive ? '#6667AB' : 'initial',
								color: isActive ? '#fff' : '#6667AB',
							}}

						/>}
						label='Валюта' />
				)}
			/>
			<NavLink to='/converter'
				className='nav__link'
				children={({ isActive }) => (
					<ButtonApp
						style={{
							color: isActive ? '#6667AB' : '#6667AB',
						}}
						icon={<ListIcon
							style={{
								padding: '3px',
								borderRadius: '3px',
								backgroundColor: isActive ? '#6667AB' : 'initial',
								color: isActive ? '#fff' : '#6667AB',
							}}

						/>}
						label='Конвертер' />
				)}
			/>

		</nav>
	)
}