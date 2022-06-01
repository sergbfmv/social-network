let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Second letter to you', likes: 1 },
        { id: 2, message: 'My first post', likes: 15 },
        { id: 3, message: 'Yes! I can! I do it!!!!', likes: 5 },
      ],
      newPostText: ['']
    },

    messagesPage: {
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

      newMessageText: ['']
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.messagesPage.newMessageText,
      }

      this._state.messagesPage.messages.push(newMessage)
      this._state.messagesPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
  },
}

export default store
