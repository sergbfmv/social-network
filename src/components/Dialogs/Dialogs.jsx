import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((dialog) =>
    <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  )

  let messagesElement = props.state.messages.map((m) => <Message text={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  )
}

export default Dialogs
