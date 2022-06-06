const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

function messagesReducer(state, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      }

      state.messages.push(newMessage)
      state.newMessageText = ''
      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage
      return state

    default:
      return state
  }
}

export function sendMessageActionCreator() {
  return {
    type: ADD_MESSAGE
  }
}

export function onMessageChangeActionCreator(text) {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
  }
}

export default messagesReducer
