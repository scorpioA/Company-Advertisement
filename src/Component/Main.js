import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom'
import "./Main.css"

function Main() {
  useEffect(() => {
    
    Aos.init({});

}, []);
const  card = [
    {
     image:'https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=',
      title: "the digital india",
      paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
    },
  
       {
        image:'https://media.istockphoto.com/id/1407354641/photo/group-of-diverse-executive-managers-doing-paperwork-at-meeting.jpg?b=1&s=170667a&w=0&k=20&c=68_dYMgVILLmUprxyZTsi2giEmgbeBOfmqsf8x4cD6w=',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
       {
        image:'https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
       {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOI2rqymcYPgAFIJI69cxnscovZX-l0egP9Lq_DXKQYWmlZt4u-bdARV-n4ktlPVhFMY&usqp=CAU',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
       {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwx18z4upVDwCgRDUJFupKI_RXM1BkyZJFg&usqp=CAU',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
       {
        image:'https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },  {
        image:'https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },{
        image:'https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII=',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
       {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOI2rqymcYPgAFIJI69cxnscovZX-l0egP9Lq_DXKQYWmlZt4u-bdARV-n4ktlPVhFMY&usqp=CAU',
         title: "the digital india",
         paragraph : "What do you want your company to be known for?Is your company the one that started as a small family-owned shop that grew into a billion-dollar enterprise? Or is it a company that upholds sustainability"
       },
]

  return (
    <>
    <div className='MAIN-LIST-boder'>   
     <h2 className='MAIN-LIST-COMPANY'> List OF Company</h2>
     <h3 className='MAIN-LIST-COMPANY1'>Save time managing your deals with </h3>
     <h5 className='MAIN-LIST-COMPANY2'>our best companies</h5>
    </div>

    <div className='back'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      
      {card.map(el=>{
          
        return  <div className='card-box ' data-aos="zoom-out"  data-aos-duration="3000">
        <Link to="/Company_detail">
        <img className='image-card' src={el.image} />
        </Link>
       <h3 className='h3'>{el.title} </h3> 
       <p className='p'>{el.paragraph} </p> 
        
       <div className='button-div'>
           <button className='button-28'> visit </button>
         
           <button className='button-28 '> More</button>
           
           </div>
      </div>
    
    })}
   
    </div>
   
    </>
  )
}

export default Main