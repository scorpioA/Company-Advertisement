import React, { Component } from 'react'
import LoginChild from './LoginChild'
import { Row, Col } from "react-bootstrap";
import './Form.css'
import { Link } from "react-router-dom";
class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      Name:"",
      Email:"",
      Date: "",
      Address:"",
      Mobile:""
      
    }
    
  }
  handleNameChange =(event) => {
    this.setState({
      Name : event.target.value
    })
  }



  handleEmailChange =(event)=> {
    this.setstate({
      Email: event.target.value
    })
  }





   handleDateChange=(event)=>{
    this.setstate({
      Date:event.target.value
    })
   }





   handleAddressChange=(event)=>{
    this.setstate({
      Address:event.target.value
    })
   }

   handleMobileChange=(event)=>{
    this.setstate({
      Mobile:event.target.value
    })
   }

 


  render() {
    return (

      <div className='login-page'>     
      <div className="bg-image"></div>
      <Row id="inner-page">
        <Col sm={6}>
          <div className="center-div pdd">
            <div className="col gr-back position-relative">
              <span className="cusBt"></span>
              <h4 style={{ fontWeight: 700 }}>LOGIN/REGISTER</h4>
              <input
                type="text"
                placeholder="EMAIL ID OR MOBILE NUMBER"
                className="control-form"
              />
        
              <button className="btn btn-danger"> Continue</button>
            
            </div>
            <div className="col">Or Login Using</div>

            <div className="col">
              <div className="btn btn-info fb">
                <i class="fa-brands fa-facebook-f"></i>Facebook
              </div>
              <div className="btn btn-info google">+ Google</div>
            </div>

           
          </div>
        </Col>
        <Col sm={6} className="rightPage position-relative">
          <div className="imgBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2TBYclVBf8g3cjmq1JDDdOE07CM6IErUHQ&usqp=CAU" alt="" />
          </div>
        </Col>
      </Row>
      </div>

    )
  }
}

export default Form
