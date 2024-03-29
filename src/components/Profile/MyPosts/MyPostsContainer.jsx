import { connect } from 'react-redux'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = onPostChangeActionCreator(text)
      dispatch(action)
    },

    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
