import React, { Component } from 'react'
import "./LoginChild.css"
 class LoginChild extends Component {
  render() {
    const {type,labelText,value,handleChange}=this.props;
    return (
      <div className='inputSection'>
        <div className='input'>
        <label className='lable'>{labelText} <br/>
          <input type={type}  value = {value} onChange={(e)=>{handleChange(e)}}  className= "inp"></input>
        </label>
      </div>
      </div>
    )
  }
}

export default LoginChild
