import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './board.scss'

class Board extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    onUpdateGame: PropTypes.func,
    board: PropTypes.array,
    onDisableBoard: PropTypes.func,
    userOne: PropTypes.string,
    userTwo: PropTypes.string,
    onUpdateWinner: PropTypes.func,
    turn: PropTypes.string
  }

  state = {
    board: this.props.board,
    turn: this.props.turn
  }

  static getDerivedStateFromProps(props, state){
    if (props.board !== state.board){
      return {board: props.board}
    }

    return null
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.board !== this.state.board) {
      const win = this.selecItems()
      this.winner(win)
    }
  }

  handleClickBoard = (item) => {
    const newBoard = Object.assign([], this.state.board)
    
    if (newBoard[item] !== 0) {
      alert('must select another cell')
      return 
    }
    newBoard[item] = this.state.turn
   
    this.setState({
      turn: this.state.turn === 1 ? 2 : 1
    }, () => {
      this.props.onUpdateGame(newBoard, this.state.turn)
    })
    
  }

  selecItems = () => {
    let selectItem = 0;
    const board = this.state.board
    for (let i = 0; i < 9; i++) {
        if (board[i] === 0) selectItem++;
    }
    // Horizontal lines
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== 0) return board[0];
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== 0) return board[3];
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== 0) return board[6];
    // Vertical lines
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== 0) return board[0];
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== 0) return board[1];
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== 0) return board[2];
    // Diagonal lines
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== 0) return board[0];
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== 0) return board[2];

    if (selectItem > 0) {
        return 0;
    } else {
        return 3;
    }
  }

  winner = (numItem) => {
    const { userOne, userTwo } = this.props
    const { turn } = this.state
    const userWinner = turn === 1 ? userTwo : userOne
    if (numItem === 1){
      alert('Winer is '+ userWinner)
      this.props.onDisableBoard()
      this.props.onUpdateWinner(numItem)
      return null
    }
    if (numItem === 2){
      alert('Winer is ' + userWinner)
      this.props.onDisableBoard()
      this.props.onUpdateWinner(numItem)
      return null
    }
    if (numItem === 3){
      alert('The game is Draw!')
      this.props.onDisableBoard()
      this.props.onUpdateWinner(numItem)
      return null
    } 
  }

  renderItem = (item) => {
    const board = this.state.board
    let turnItem = null
    if (board[item] === 1){
      turnItem = 'X'
    }else if (board[item] === 2){
      turnItem = 'O'
    }
    return turnItem
  }

  render() {
    const { board, turn } = this.state
    const { userOne, userTwo, disabled } = this.props
    return (
      board.length > 0 && 
        <React.Fragment>
          <div className="turns">
            <div className="btn">{turn === 1 ? `${userOne} is your turn` : `${userTwo} is your turn`}</div>
          </div>
          <div className="item contenido">
            {board.map((value, key) => {
              return (<div className={`item c${key}`} key={key} onClick={()=>{!disabled && this.handleClickBoard(key)}}>{value === 1 ? 'X' : value === 2 ? 'O' : '' }</div>)
            })}
          </div>
        </React.Fragment>
    );
  }
}

export default Board