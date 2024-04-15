import React , {useEffect} from 'react'
import "./Companylogo.css"
import Aos from 'aos';
function Companylogo() {
  useEffect(() => {
    
    Aos.init({});

}, []);
    const Logo = [
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
        {image:'https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'},
        {image:'https://cdn.cdnlogo.com/logos/a/83/amazon-com.svg'},
        {image:'https://cdn.worldvectorlogo.com/logos/flipkart.svg'},
]


  return (
    <>
    <div className='companylogo Loop js-loop'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
     <h3 className='companyour'>Our top companies </h3>
    
      <div className='companylogoflex scr' >
      {Logo.map(el=>{
        return  <div >
                 <img  className='companylogoimg' src={el.image}/>
                </div>
            })}
      </div>
      </div>
      
   
    </>
  )
}

export default Companylogo