import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './board.scss'

class Board extends Component {
  render() {
    const disabled = this.props.disabled
    const darclic = (num)=>{
      alert(num)
    }
    return (
        <div className="item contenido">
          <div className="item c0" onClick={()=>{!disabled && darclic(0)}}>item0</div>
          <div className="item c1" onClick={()=>{!disabled && darclic(1)}}>item1</div>
          <div className="item c2" onClick={()=>{!disabled && darclic(2)}}>item2</div>
          <div className="item c3" onClick={()=>{!disabled && darclic(3)}}>item3</div>
          <div className="item c4" onClick={()=>{!disabled && darclic(4)}}>item4</div>
          <div className="item c5" onClick={()=>{!disabled && darclic(5)}}>item5</div>
          <div className="item c6" onClick={()=>{!disabled && darclic(6)}}>item6</div>
          <div className="item c7" onClick={()=>{!disabled && darclic(7)}}>item7</div>
          <div className="item c8" onClick={()=>{!disabled && darclic(8)}}>item8</div>
        </div>
    );
  }
}

Board.propTypes = {
  disabled: PropTypes.bool
}

export default Board