import React, { useEffect } from 'react'
import './review.css'    
import { Card, Container, Image } from 'react-bootstrap'

import quoteImg from '../../assets/Images/quote-img.png'

import pic1 from "../../assets/Images/pic-1.png"
import pic2 from "../../assets/Images/pic-2.png"
import pic3 from "../../assets/Images/pic-3.png"
import { IoStar, IoStarHalf } from 'react-icons/io5'

import AOS from 'aos'
import 'aos/dist/aos.css'

const review = [

    {
        img:pic1
    },

    {
        img:pic2
    },

    {
        img:pic3
    },
]

const Review = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (

    <section className='review' id='review'>

        <Container>

            <h2 className="heading">
                customer <span>review</span>
            </h2>

            <div className="row box-container justify-content-between">

                {/* {

                    review.map((item,index) =>(

                        <div className="col-lg-4 box " key={index * Math.random()}>

                            <img src={quoteImg} alt="" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore voluptatum eligendi quasi corrupti minima consequatur eos laborum, rerum quo fugiat aspernatur qui ullam voluptatibus a maxime ad, necessitatibus nemo hic officiis assumenda dolores distinctio exercitationem nostrum! Fugiat, ea explicabo!
                            </p>

                            <img src={item.img} alt="" className='user rounded-circle' />

                            <h4>john deo</h4>

                            <div className="stars">

                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />

                            </div>

                        </div>
                    ))
                } */}

                {
                    review.map((item,index) =>(

                        <div className="col-lg-4 box" key={index * Math.random()}>

                            <Card className='card' data-aos="flip-down">

                                <Image src={quoteImg} className='quote d-none d-sm-block'/>

                                <Card.Body className='content'>

                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero harum vitae provident eius, omnis facere repellat et incidunt doloremque voluptatum natus suscipit reiciendis saepe amet deleniti nesciunt blanditiis magnam porro.
                                    </Card.Text>

                                    <Card.Img src={item.img} className='user rounded-circle w-10'/>
                                    <h4>john deo</h4>

                                    <div className="stars">
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStarHalf />
                                    </div>
                                    
                                </Card.Body>

                            </Card>

                        </div>
                    ))
                }

            </div>

        </Container>
      
    </section>

  )
}

export default Review
