import React from 'react'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'

function DialogsContainer(props) {
  let state = props.store.getState().messagesPage

  function sendMessage() {
    let action = sendMessageActionCreator()
    props.store.dispatch(action)
  }

  function onMessageChange(text) {
    let action = onMessageChangeActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <Dialogs sendMessage={sendMessage} updateNewMessageText={onMessageChange} messagesPage={state} />
  )
}

export default DialogsContainer
