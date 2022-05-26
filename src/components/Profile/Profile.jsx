import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src='https://cdn.nextgov.com/media/img/cd/2020/10/19/NGspace20201019/route-fifty-lead-image.jpg?1627412209' alt='' width={1000}></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
