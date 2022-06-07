const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'Second letter to you', likes: 1 },
    { id: 2, message: 'My first post', likes: 15 },
    { id: 3, message: 'Yes! I can! I do it!!!!', likes: 5 },
  ],
  newPostText: ''
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0
      }

      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state

    default:
      return state
  }
}

export function addPostActionCreator() {
  return {
    type: ADD_POST
  }
}

export function onPostChangeActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export default profileReducer
