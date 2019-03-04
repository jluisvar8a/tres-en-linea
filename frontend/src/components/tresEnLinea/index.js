import React, { Component } from 'react'
import Header from './header'
import Board from './board'
import Footer from './footer'
import './index.scss'
import { newGame } from '../../api'

class TresEnLinea extends Component {
  state = {
    boardDisabled : true
  }

  newGame = (userOne, userTwo) => {
    newGame({
      userOne, 
      userTwo, 
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }).then((res)=>{console.log(res)})
      .catch((err)=>{console.error(err)})
  }
  render() {
    return (
      <section class="container">
        <Header/>
        <Board 
          disabled = {this.state.boardDisabled}
        />
        <Footer 
          onNewGame={this.newGame}
        />
      </section>
    );
  }
}
            
export default TresEnLinea