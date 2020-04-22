import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriends from './AddFriends'

class FriendsList extends React.Component {
    state = {
      friendsList: []
    };
  
    componentDidMount() {
      this.getData();
    }
  
    getData = () => {
      // request data with the token
      // set the data to state
  
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          this.setState({
            friendsList: res.data
          })
        })
        .catch(err => console.log({ err }));
    };
  
    render() {
    
      return(
        <div>
        <h1>My Best Buds!</h1>
        <AddFriends/>
        {this.state.friendsList.map(friend =>{
          return(
            <>
              <h2>{friend.name}</h2>
              <h4>{friend.age}</h4>
              <h4>{friend.email}</h4>
            </>
          )
        })}
     
     </div>
      )
    }
  }
  
  export default FriendsList;
  