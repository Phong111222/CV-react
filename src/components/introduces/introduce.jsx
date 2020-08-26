import React, { Component } from 'react';
import Left from './left';
import Right from './right';
import './introduce.scss';
class Introduce extends Component {
  render() {
    return (
      <div className='Introduce'>
        <Left />
        <Right />
      </div>
    );
  }
}

export default Introduce;
