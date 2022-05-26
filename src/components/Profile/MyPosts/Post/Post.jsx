import s from './Post.module.css'

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://preview.pixlr.com/images/800wm/100/1/1001171915.jpg" alt="cosmoman" />
      {props.message}
      <div>
        <span>Like</span> {props.likes}
      </div>
    </div>
  )
}

export default Post
