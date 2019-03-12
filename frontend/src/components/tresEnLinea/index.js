import React, { Component } from 'react'
import Header from './header'
import Board from './board'
import './index.scss'
import { newGame, updateGame, getGame } from '../../api'

class TresEnLinea extends Component {
  state = {
    boardDisabled : true,
    gameId: null,
    board: [],
    userOne: '',
    userTwo: '',
    turn: ''
  }

  onNewGame = (userOne, userTwo) => {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    newGame({
      userOne, 
      userTwo, 
      board: board,
      winner: '',
      turn:1 
    }).then((res)=>{
      this.setState({
        boardDisabled : false,
        gameId: res.data._id,
        board: board,
        userOne,
        userTwo
      })
    } )
      .catch((err)=>{console.error(err)})
  }

  onUpdateGame = (board, turn ) =>{
    const idGame = this.state.gameId
    updateGame({
      idGame,
      board,
      turn
    }).then((res) => {
      this.setState({
        board: res.data.board,
        turn: res.data.turn
      })
    }).catch((err)=>{
      console.error(err)
    })
  }

  disableBoard = () => {
    this.setState({
      boardDisabled: true
    })
  }

  onUpdateWinner = (winner) => {
    const idGame = this.state.gameId
    updateGame({
      idGame,
      winner
    }).catch((err)=>{
      console.error(err)
    })
  }

  onGetGame = (id) => {
    getGame(id).then((res) => {
      console.log(res)
      const data = res.data.response 
      this.setState({
        board: data.board,
        userOne: data.userOne,
        userTwo: data.userTwo,
        turn: data.turn,
        gameId: data._id,
        boardDisabled: false,
      })
    }).catch((err) => {
      console.error(err)
    })
  }


  render() {
    const { board, userOne, userTwo, boardDisabled, turn } = this.state
    return (
      <section className="container">
        <Header
          onNewGame={this.onNewGame}
          onGetGame={this.onGetGame}
        />
        <Board 
          disabled={boardDisabled}
          onUpdateGame={this.onUpdateGame}
          board={board}
          onDisableBoard={this.disableBoard}
          userOne={userOne}
          userTwo={userTwo}
          onUpdateWinner={this.onUpdateWinner}
          turn={turn}
        />
      </section>
    );
  }
}
            
export default TresEnLinea