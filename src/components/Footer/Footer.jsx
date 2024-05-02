import React, { useEffect } from 'react'
import './footer.css'
import { Nav } from 'react-bootstrap'

import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (

    <section className='footer'>

        <div className="row" >

            <div className="col-lg-4 share" >

                <CiFacebook className='logos'/>
                <FaXTwitter className='logos'/>
                <IoLogoInstagram className='logos'/>
                <FaWhatsapp className='logos'/>
                <FiYoutube className='logos'/>

            </div>

            <div className="col-lg-4 links">

                <Nav.Link href='#' className='link'>home</Nav.Link>
                <Nav.Link href='#' className='link'>about</Nav.Link>
                <Nav.Link href='#' className='link'>menu</Nav.Link>
                <Nav.Link href='#' className='link'>products</Nav.Link>
                <Nav.Link href='#' className='link'>review</Nav.Link>
                <Nav.Link href='#' className='link'>contact</Nav.Link>
                <Nav.Link href='#' className='link'>blogs</Nav.Link>

            </div>

            <div className="col-lg-4 credit">
                created by <span>RB</span> | all rights reserved
            </div>

        </div>
      
    </section>

  )
}

export default Footer
