import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (
        <>
        <div className="Footer">
        <div  className="Footer-left">
            <p>© 2021 Airbnb, Inc.  ·  Privacy  ·  Terms  ·  Sitemap  ·  Company details</p>
       </div>  
       <div className="Footer-center"></div>
       <div  className="Footer-right"><p><b>English </b>     (IN)    ₹ INR </p><FacebookIcon /> <TwitterIcon /> <InstagramIcon /></div>
       </div>
        </>
    )
}

export default Footer
