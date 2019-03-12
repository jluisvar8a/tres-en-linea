import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getUnfinishedGames } from '../../api'
import './header.scss'

class Header extends Component {
  state = {
    showUsersForm : false,
    showRestoreGameForm: false,
    userOne: '',
    userTwo: '',
    userOneErr: false,
    userTwoErr: false,
    gamesList: [],
    gameSelected: false 
  }

  toggleUserForm = () => {
    this.setState({showUsersForm : !this.state.showUsersForm})
  }
  
  toggleRestoreGameForm = () => {
    this.setState({showRestoreGameForm : !this.state.showRestoreGameForm}, () => {
      if (this.state.showRestoreGameForm) {
        getUnfinishedGames().then((res) => {
          this.setState({
            gamesList: res.data.response
          })
        }).catch((err) => {
          console.error(err)
        })
      }
    })
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
    this.toggleUserForm()
  }

  selectGame = (event) => {
    const id = event.target.value
    if (id !== ''){
      this.setState({ gameSelected : id })
    } else {
      this.setState({ gameSelected : false })
    }
  }

  resumeGame = () => {
    this.toggleRestoreGameForm()
    this.props.onGetGame(this.state.gameSelected)
  }

  render() {
    const { gamesList } = this.state
    return (
        <div className="header">
        <h1>TIC-TAC-TOC</h1>
          <div className="newGame">
            {(!this.state.showUsersForm && !this.state.showRestoreGameForm) &&
              <React.Fragment>
                <button onClick={this.toggleUserForm}>New Game</button>
                <button onClick={this.toggleRestoreGameForm}>Restore game</button>
              </React.Fragment>
            }
            {this.state.showUsersForm && 
              <div className="userFormContainer">
                <div className="usersForm">
                  <h2>Enter users</h2>  
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
              </div>
            }
            {this.state.showRestoreGameForm &&
              <div className="userFormContainer">
                <div className="usersForm">
                  <h2>Search the game to resume</h2>  
                  <div>
                  {gamesList.length > 0 &&
                    <select onChange={this.selectGame}>
                      <option value=''>Select your game</option>
                      {gamesList.map((value, key) => {
                        return (
                          <option key={key} value={value._id}>{`${value.userOne} vs ${value.userTwo}`}</option>
                        )
                      })
                        
                      }                   
                    </select>}
                  </div> 
                  {gamesList.length > 0 && <button onClick={this.resumeGame} disabled={!this.state.gameSelected}>Resume</button>}
                  <button onClick={this.toggleRestoreGameForm}>Cancel</button>
                </div>
              </div>
            }
          </div>
        </div>
    );
  }
}

Header.propTypes = {
  onNewGame: PropTypes.func,
  onGetGame: PropTypes.func  
}
            
export default Header