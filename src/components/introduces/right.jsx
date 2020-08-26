import React, { Component } from 'react';

class Right extends Component {
  render() {
    return (
      <div className='RightInfo'>
        <h4>GENERAL INFORMATION</h4>
        <h1>NORTH</h1>
        <h2>VANCOUVER</h2>
        <h3>LOCATION</h3>
        <div className='district'>
          <p>13/3F ap dan thang 2, xa Tan Thoi Nhi, Hoc Mon</p>
        </div>
        <div className='Logo_phone'>
          <img
            src='https://1000logos.net/wp-content/uploads/2017/02/iPhone_logo.png'
            alt=''
            className='logoIphone'
          />
          <p className='phone'>0365313046</p>
        </div>
      </div>
    );
  }
}

export default Right;
