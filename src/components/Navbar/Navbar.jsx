import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

// function activeClass(navData) {
//   const active = navData.isActive ? s.active : s.item

//   return active
// } need add className to NavLink

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}><NavLink to='/profile'>Profile</NavLink></div>
      <div className={s.item}><NavLink to='/dialogs'>Messages</NavLink></div>
      <div className={s.item}><NavLink to='/news'>News</NavLink></div>
      <div className={s.item}><NavLink to='/music'>Music</NavLink></div>
      <div className={s.item}><NavLink to='/settings'>Settings</NavLink></div>
      <div className={s.item}><NavLink to='/friends'>Friends</NavLink></div>
    </nav>
  )
}

export default Navbar
