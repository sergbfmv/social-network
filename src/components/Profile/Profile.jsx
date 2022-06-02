import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile
