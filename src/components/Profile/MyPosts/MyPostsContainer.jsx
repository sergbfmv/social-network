import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

function MyPostsContainer(props) {

  let state = props.store.getState()

  function addPost() {
    props.store.dispatch(addPostActionCreator())
  }

  function onPostChange(text) {
    let action = onPostChangeActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer
