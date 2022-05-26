import s from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div className={s.profileInfo}>
      <div>
        <img src='https://cdn.nextgov.com/media/img/cd/2020/10/19/NGspace20201019/route-fifty-lead-image.jpg?1627412209' alt='' width={1000}></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
