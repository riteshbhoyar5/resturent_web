import React from 'react'
import './contact.css'
import { Container } from 'react-bootstrap'

import { CiUser } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (

    <section className='contact' id='contact'>

        <Container>

        <h2 className='heading'>
            <span>contact</span> us
        </h2>

        <div className="row">

            <div className="col-lg-6">

                <iframe

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432.060253670805!2d80.1990365002791!3d21.349306869181802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ba5c74c0099f3%3A0x440362a5add63b37!2sGoregaon%2C%20Maharashtra%20441801!5e0!3m2!1sen!2sin!4v1713418516401!5m2!1sen!2sin" width="600" height="450" className='map'>

                </iframe>

            </div>

            <div className="col-lg-6">

                <form>

                    <h4>get in touch</h4>

                    <div class="mb-2 inputBox">

                        <span className='user'>
                            <CiUser/>
                        </span>

                        <input type="text" class="form-control" placeholder='name' />

                    </div>

                    <div class="mb-2 inputBox">

                        <span className='envelope'>
                                <SlEnvolope/>
                        </span>
                            
                        <input type="email" class="form-control" placeholder='email' />

                    </div>

                    <div class="mb-2 inputBox">

                        <span className="call">
                            <IoCallOutline/>
                        </span>

                        <input type="text" className="form-control" placeholder='number'/> 
                            
                    </div>

                    <button type="submit" class="btn">Submit</button>

                </form>

            </div>

        </div>

        </Container>
      
    </section>

  )
}

export default Contact
