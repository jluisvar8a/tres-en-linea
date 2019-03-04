import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  render() {
    return (
        <div class="header">
          <div class="turns">
            <select name="" id=""></select>
          </div>
          <div class="turns">
            <button class="btn">X</button>
            <button class="btn">O</button>
          </div>
          <div class="turns"><input type="text"/></div>
        </div>
    );
  }
}
            
export default Header