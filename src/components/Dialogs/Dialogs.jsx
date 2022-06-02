import React from 'react'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/state'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((dialog) =>
    <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  )

  let messagesElement = props.state.messages.map((m) => <Message text={m.message} />)

  function sendMessage() {
    let action = sendMessageActionCreator()
    props.dispatch(action)
  }

  function onMessageChange(e) {
    let text = e.target.value
    //let text = newMessageElement.current.value
    let action = onMessageChangeActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea onChange={onMessageChange} value={props.state.newMessageText} placeholder='Enter your message'></textarea></div>
          <div><button onClick={sendMessage}>Send message</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
