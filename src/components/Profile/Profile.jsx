import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} postText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile
