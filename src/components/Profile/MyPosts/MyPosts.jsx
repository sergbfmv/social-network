import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

  let postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes} />)

  let newPostElement = React.createRef()

  function addPost() {
    props.addPost()
  }

  function onPostChange() {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.postText} onChange={onPostChange}></textarea>
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
