
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './footer.scss'

class Footer extends Component {
  state = {
    showUsersForm : false,
    userOne: '',
    userTwo: '',
    userOneErr: false,
    userTwoErr: false 
  }

  toggleUserForm = () => {
    this.setState({showUsersForm : !this.state.showUsersForm})
  }  

  usersValue = (event) => {
    const user = event.target.id
    const value = event.target.value
    this.setState({
      [user]: value
    })
  }

  checkUser = (user) => {
    if (this.state[user] === ''){
      this.setState({
        [user + 'Err']: true
      })
      return false
    } else {
      this.setState({
        [user + 'Err']: false
      })
      return true
    }
  }

  startNewGame = ()=>{
    const { userOne, userTwo } = this.state
    const userOneValid = this.checkUser('userOne')
    const userTwoValid = this.checkUser('userTwo')
    if (userOneValid && userTwoValid){
      this.props.onNewGame(userOne, userTwo)
    }
  }

  render() {
    return (
      <div className="footer">
        {!this.state.showUsersForm && <button onClick={this.toggleUserForm}>New Game</button>}
        {this.state.showUsersForm && 
          <div>
            <h2>enter the users</h2>  
            <div>
              <input type="text" placeholder="User One" onKeyUp={this.usersValue} id="userOne"/>
              {this.state.userOneErr && <label className="userError">this field is required</label>}
            </div> 
            <div>
              <input type="text" placeholder="User Two" onKeyUp={this.usersValue} id="userTwo"/>
              {this.state.userTwoErr && <label className="userError">this field is required</label>}
            </div> 
            <button onClick={this.startNewGame}>Start</button>
            <button onClick={this.toggleUserForm}>Cancel</button>
          </div>
        }
      </div>
    );
  }
}

Footer.propTypes = {
  onNewGame : PropTypes.func
}
            
export default Footer
