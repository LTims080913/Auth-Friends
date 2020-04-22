import React, { Component } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'



export class AddFriends extends Component {
    state = {
        newFriend: {
            name: '',
            age: '',
            email: '',
        }
    }

    handleChange = e => {
        this.setState({
            newFriend:{
            ...this.state.newFriend,
            [e.target.name]:e.target.value
            }
        })
    }
    submit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.newFriend)
    }

    render() {
        return (
           <form onSubmit={this.submit}>
               <h2>Make New Friends!</h2>
               <label>
                   Name: 
               </label>
                    <input
                        name='name'
                        type='text'
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                        />
                <label>
                    Age:
                </label>
                <input
                        name='age'
                        type='text'
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                        />
                 <label>
                    Email:
                </label>
                <input
                        name='email'
                        type='text'
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                        />
                <button type='submit'>Add Friend!</button>
           </form>
        )
    }
}

export default AddFriends
