import { connect } from 'react-redux'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage : () => {
      let action = sendMessageActionCreator()
      dispatch(action)
    },

    updateNewMessageText: (text) => {
      let action = onMessageChangeActionCreator(text)
      dispatch(action)
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

