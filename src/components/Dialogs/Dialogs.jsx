import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

function Dialog(props) {
  return (
    <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
  )
}

function Message(props) {
  return (
    <div className={s.message}>{props.text}</div>
  )
}

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialog name='Dasha' id='1' />
        <Dialog name='Artyom' id='2' />
        <Dialog name='Max' id='3' />
        <Dialog name='Svetlana' id='4' />
        <Dialog name='Greg' id='5' />
        <Dialog name='Aliya' id='6' />
        <Dialog name='Misha' id='7' />
        <Dialog name='Serg' id='8' />
        <Dialog name='Elena' id='9' />
      </div>
      <div className={s.messages}>
        <Message text='Hi!' />
        <Message text='ok' />
        <Message text='i dont know' />
        <Message text='Why not?!' />
      </div>
    </div>
  )
}

export default Dialogs
