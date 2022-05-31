import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((dialog) =>
    <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  )

  let messagesElement = props.state.messages.map((m) => <Message text={m.message} />)

  let newMessageElement = React.createRef()

  function sendMessage() {
    props.addMessage()
  }

  function onMessageChange() {
    let text = newMessageElement.current.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
      <div>
        <button onClick={sendMessage}>Send message</button>
        <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
      </div>
    </div>
  )
}

export default Dialogs
