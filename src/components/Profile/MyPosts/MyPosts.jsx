import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div>my posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message='Second letter to you' likes='15' />
        <Post message='My first post' likes='20' />
      </div>
    </div>
  )
}

export default MyPosts
