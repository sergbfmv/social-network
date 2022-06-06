import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'



function MyPosts(props) {

  let postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes} />)

  let newPostElement = React.createRef()

  function addPost() {
    let action = addPostActionCreator()
    props.dispatch(action)
  }

  function onPostChange() {
    let text = newPostElement.current.value
    let action = onPostChangeActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts
