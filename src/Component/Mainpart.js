import React, { useEffect } from 'react'
import Aos from 'aos';
import "./Mainpart.css"
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";



function Mainpart() {
  useEffect(() => {
    
    Aos.init({});

}, []);
  return (
    <>
    <div>
    
    <div  className='Mainpart-padding'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
         <Container>
             <Row>
                <Container className='w-50' >
                        <Col>
                            <h2 className='color-white'>ABOUT US</h2>
                            <p className='color-golden'>It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader.</p>
                            <p className='color-golden'>page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            <p className='color-golden'>page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        </Col>
                </Container>

                <Container className='w-50' data-aos="zoom-out"  data-aos-duration="3000">
                     <img className='img-about' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqotNYESJ3_KeENTEF8tSTsZSniD5SQROEHw&usqp=CAU' />
                </Container>
                
             </Row>
    
         </Container>
    </div>
  </div>  
    </>
  )
}

export default Mainpart