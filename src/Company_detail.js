import React, { useEffect } from 'react'
import "./Company_detail.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Footer from "./Component/Footer/Footer"
import Aos from 'aos';
import "font-awesome/css/font-awesome.min.css";

import "aos/dist/aos.css"
function Company_detail() {
   
  useEffect(() => {
    
      Aos.init({});

  }, []);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

 const companycard = [
    {img:"https://images.herzindagi.info/image/2021/Feb/Avoid-These-5-Mistakes-While-Buying-Bridal-Jewelleryssssss_g.jpg", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-116405,resizemode-1,msid-84504623/industry/cons-products/fashion-/-cosmetics-/-jewellery/covid-19-impact-will-gold-jewellery-regain-the-shine.jpg",paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsARlye_CA3krz-Ej5UdDU9gb0IYc1etDIA&usqp=CAU", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZIBQqTP2ruporW3VPESrhAYoeNS1_B0HUA&usqp=CAU", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://cdn0.weddingwire.in/vendor/7358/3_2/960/jpg/16711707-1391333074239730-4484282615844536022-n_15_67358.jpeg", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://images.moneycontrol.com/static-mcnews/2022/06/Gold-jewellery-generic.jpg?impolicy=website&width=1600&height=900", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/7/w900X450/Gold_Jewellery_EPS.jpg?w=400&dpr=2.6", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsu66tP1K_WwxRfRfxSbP5buNlAWUzSTBQA&usqp=CAU", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv6-pEqN-6Ua4eVeWgQwCf_adbP420N323Q&usqp=CAU", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://i.ytimg.com/vi/iBMIbusixrM/maxresdefault.jpg", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCUMUixDw5KZAGhw_lNs5GQQH0lMCuPpJGA&usqp=CAU", paragraph:"it is good Find your next favorite jewelry piece in our it is good Find your next favorite jewelry piece in our collection!Find your next favorite jewelry piece in our collection!"},

 ] 
  return (
    <>
    <div className='company_detail'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <div className="banner-company">
    <div className="banner-text-company"  data-aos="fade-right"  data-aos-duration="1500">
      <h2 className="banner-title-company">Discover Your Perfect Piece</h2>
      <p className="banner-paragraph-company">Find your next favorite jewelry piece in our collection!</p>
      <button className="banner-btn-company">Explore Collections</button>
      <div className='product-detail-share-icon'>
      <span><i className="fa fa-facebook-official detail-icon-size facebook-color pp" aria-hidden="true"></i></span>
      <span><i className="fa fa-instagram detail-icon-size insta-color pp" aria-hidden="true"></i></span>
      <span><i className="fa fa-whatsapp detail-icon-size whatsap-color pp" aria-hidden="true"></i></span>
      <span><i className="fa fa-google-plus detail-icon-size pp" aria-hidden="true"></i></span>
   </div>
    </div>
    <div className="banner-image-company"  data-aos="fade-left" data-aos-duration="2000">
      <img className='image-banner-company' src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Sumangali-Jewellery-Collection-o1.jpg" alt="Jewelry Collection" />
    </div>
  </div>
  <div className='happyclient'>
  <Container className='happyclientbox' data-aos="fade-right"  data-aos-duration="3000">
     <Col >
       <h3 className='k55k color-h'>55k</h3>
       <h4  className='color-h'>happy client</h4>
     </Col>
  </Container>
  <Container className='happyclientbox' data-aos="fade-up"  data-aos-duration="3000">
  <Col>
    <h3 className='k25k color-h'>25k</h3>
    <h4 className='color-h'>our collection</h4>
  </Col>
</Container>
<Container className='happyclientbox' data-aos="fade-left"  data-aos-duration="3000">
<Col>
  <h3 className='k115k color-h'>115k</h3>
  <h4 className='color-h'>product  delivered</h4>
</Col>
</Container>
  </div>

  <div  className='Mainpart-paddings'>
  <Container >
      <Row>
      <Container className='w-50' data-aos="fade-up"  data-aos-easing="linear"  data-aos-duration="1500" >
      <img className='img-abouts' src='https://cdn0.weddingwire.in/vendor/7358/3_2/960/jpg/16711707-1391333074239730-4484282615844536022-n_15_67358.jpeg' />
 </Container>
 
         <Container className='w-50' ata-aos="fade-down" >
        
      
                 <Col>
                     <h2 className='color-whites '  data-aos-easing="linear"  data-aos-duration="3000">THE INDIAN JEWELLERY</h2>
                     <p className='color-goldens  '  data-aos-easing="linear"  data-aos-duration="3000">It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader.</p>
                     <p className='color-goldens '  data-aos-easing="linear"  data-aos-duration="3000">page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                     <p className='color-goldens '  data-aos-easing="linear"  data-aos-duration="3000">page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact th eader will be distracted the readable content of a page when lo layout. Th e po int of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                 </Col>
         </Container>

       
      </Row>

  </Container>
  
</div>
  <p className='ourproduct'>OUR BEST PRODUCT</p>
   <div className='companycardflex'>
     {companycard.map(el=>{
        return   <div className='cardBoxContainer' data-aos="zoom-out" data-aos-duration="1500">
        <img src={el.img} alt="card" className='imagebox'  />
        <div className='descriptionContainer' >
          <p className='descriptions' >{el.paragraph}</p>
        </div>
    </div>  
     })}
       

    </div>

    
  </div>
   <Footer />
    </>
  )
}

export default Company_detail