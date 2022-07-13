import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

function Dialogs(props) {
  let state = props.messagesPage
  let dialogsElements = state.dialogs.map((dialog) =>
    <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  )

  let messagesElement = state.messages.map((m) => <Message text={m.message} />)

  function sendMessage() {
    props.sendMessage()
  }

  function onMessageChange(e) {
    let text = e.target.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea onChange={onMessageChange} value={state.newMessageText} placeholder='Enter your message'></textarea></div>
          <div><button onClick={sendMessage}>Send message</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
