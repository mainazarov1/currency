import { NavLink } from 'react-router-dom'
import { ButtonApp } from '../ButtonApp/ButtonApp'
import styles from './Navigation.module.scss'
import ListIcon from '@mui/icons-material/List';
export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<h1>CURRENCY</h1>
			<NavLink to='/valute'
				className='nav__link'
				style={isActive => ({
					color: isActive ? 'red' : 'black'
				})}
				children={isActive => (
					<ButtonApp icon={<ListIcon />}
						style={{
							color: isActive ? 'red' : 'black'
						}}
						label='Валюта' />
				)}
			/>
			<NavLink to='/converter' className="nav__link"
				style={isActive => ({
					color: isActive ? 'red' : 'black'
				})}
			>Конвертер</NavLink>
		</nav>
	)
}