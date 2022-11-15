import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer'
import StoreContext from '../../../storeContext'
import MyPosts from './MyPosts'

function MyPostsContainer() {



  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()

          function addPost() {
            store.dispatch(addPostActionCreator())
          }

          function onPostChange(text) {
            let action = onPostChangeActionCreator(text)
            store.dispatch(action)
          }

          return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
