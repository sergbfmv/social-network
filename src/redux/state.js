import { renderEntireTree } from "../render"

let state = {
  profilePage : {
    posts : [
      { id: 1, message: 'Second letter to you', likes: 1 },
      { id: 2, message: 'My first post', likes: 15 },
      { id: 3, message: 'Yes! I can! I do it!!!!', likes: 5 },
    ],
    newPostText: ['']
  },

  messagesPage : {
    dialogs : [
      { id: 1, name: 'Dasha', avatar: '' },
      { id: 2, name: 'Artyom', avatar: ''  },
      { id: 3, name: 'Max', avatar: ''  },
      { id: 4, name: 'Svetlana', avatar: ''  },
      { id: 5, name: 'Greg', avatar: 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg' },
      { id: 6, name: 'Aliya', avatar: ''  },
      { id: 7, name: 'Misha', avatar: ''  },
      { id: 8, name: 'Serg', avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
      { id: 9, name: 'Elena', avatar: ''  },
    ],

    messages : [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'ok' },
      { id: 3, message: 'i dont know' },
      { id: 4, message: 'Why not?!' },
    ],

    newMessageText: ['']
  }
}

export function addPost() {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likes: 0
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  renderEntireTree(state)
}

export function updateNewPostText(newText) {
  state.profilePage.newPostText = newText
  renderEntireTree(state)
}

export function addMessage() {
  let newMessage = {
    id: 5,
    message: state.messagesPage.newMessageText,
  }

  state.messagesPage.messages.push(newMessage)
  state.messagesPage.newMessageText = ''
  renderEntireTree(state)
}

export function updateNewMessageText(newMessage) {
  state.messagesPage.newMessageText = newMessage
  renderEntireTree(state)
}

export default state
