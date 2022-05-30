import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

function Dialog(props) {
  return (
    <div className={s.dialog}><img className={s.avatar} src={props.avatar} alt=''></img><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
  )
}

export default Dialog
