import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

  let postsElement = props.posts.map((p) => <Post message={p.message} likes={p.likes} />)

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
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts
