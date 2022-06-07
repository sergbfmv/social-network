const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'Dasha', avatar: '' },
    { id: 2, name: 'Artyom', avatar: '' },
    { id: 3, name: 'Max', avatar: '' },
    { id: 4, name: 'Svetlana', avatar: '' },
    { id: 5, name: 'Greg', avatar: 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg' },
    { id: 6, name: 'Aliya', avatar: '' },
    { id: 7, name: 'Misha', avatar: '' },
    { id: 8, name: 'Serg', avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
    { id: 9, name: 'Elena', avatar: '' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'ok' },
    { id: 3, message: 'i dont know' },
    { id: 4, message: 'Why not?!' },
  ],
  newMessageText: ''
}

function messagesReducer(state = initialState, action) {
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
