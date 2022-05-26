import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Second letter to you' likes='15' />
        <Post message='My first post' likes='20' />
      </div>
    </div>
  )
}

export default MyPosts
