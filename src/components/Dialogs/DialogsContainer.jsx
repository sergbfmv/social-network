import React from 'react'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/messagesReducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'

function DialogsContainer() {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage

          function sendMessage() {
            let action = sendMessageActionCreator()
            store.dispatch(action)
          }

          function onMessageChange(text) {
            let action = onMessageChangeActionCreator(text)
            store.dispatch(action)
          }

          return <Dialogs sendMessage={sendMessage} updateNewMessageText={onMessageChange} messagesPage={state} />
        }
      }
    </StoreContext.Consumer>

  )
}

export default DialogsContainer
