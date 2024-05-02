import React, { useEffect } from 'react'
import './about.css'
import { Container, Nav } from 'react-bootstrap'
import about from '../../assets/Images/about-img.jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    
    <section className="about" id="about" data-aos="fade-up-right">

        <Container>

            <h1 className="heading">
                <span>about</span> us
            </h1>

            <div className="row">

                <div className="col-lg-6 image">
                    <img src={about} alt="about" />
                </div>

                <div className="col-lg-6 content">

                    <h4>what makes our food special</h4>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur expedita necessitatibus accusamus optio quidem libero quam omnis quas nihil.
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis similique nostrum nesciunt. Hic, eum voluptates Libero laboriosam qui at.
                    </p>

                    <Nav.Link href='#' className='btn'>
                        learn more
                    </Nav.Link>

                </div>

            </div>

        </Container>

    </section>

  )
}

export default About
