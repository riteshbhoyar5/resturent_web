import React, { useEffect } from 'react'
import './product.css'
import { Card, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

import product2 from '../../assets/Images/product-2.png'
import product3 from '../../assets/Images/product-3.png'
import product1 from '../../assets/Images/product-4.png'

import Aos from 'aos';
import 'aos/dist/aos.css'


const product =[

    {
        img:product1
    },

    {
        img:product2
    },

    {
        img:product3
    }

]

const Product = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (

    <section className='products' id='products'>
        
        <Container>

            <h1 className="heading" data-aos="fade-right">
                our <span>products</span>
            </h1>

            <div className="row box-container justify-content-between">

                {
                    // product.map((item,index) =>(
                       
                    //     <div className="col-lg-4 box" key={index * Math.random}>
                            
                    //         <div className="icons">

                    //             <Nav.Link>

                    //                 <BsCart className='cart' />
                    //                 <CiHeart className='heart' />
                    //                 <MdOutlineRemoveRedEye className='eye' />

                    //             </Nav.Link>

                    //         </div>

                    //         <div className="image">
                    //             <img src={item.img} alt="" />
                    //         </div>

                    //         <div className="content">

                    //             <h4>fresh coffee</h4>

                    //             <div className="stars">

                    //                 <IoStar />
                    //                 <IoStar />
                    //                 <IoStar />
                    //                 <IoStar />
                    //                 <IoStarHalf />

                    //             </div>

                    //             <div className="price">
                    //                 Rs.99 <span>20</span>
                    //             </div>

                    //         </div>

                    //     </div>

                    // ))
                }  

                {
                    product.map((item,index) =>(

                        <div className="col-lg-4 box" data-aos="fade-left">

                            <Card className='card' key={index * Math.random()}>

                                <div className="icons">

                                    <Nav.Link>

                                        <BsCart className='cart' />
                                        <CiHeart className='heart' />
                                        <MdOutlineRemoveRedEye className='eye' />

                                    </Nav.Link>

                                </div>

                                <Card.Img src={item.img} className='image' data-aos="flip-left"/>

                                <Card.Body>
                                    <Card.Title>Fresh Coffee</Card.Title>
                                </Card.Body>

                                <div className="content">

                                    <div className="stars">

                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStar />
                                        <IoStarHalf />

                                    </div>

                                    <div className="price">
                                        Rs.99 <span>20</span>
                                    </div>

                                </div>

                            </Card>

                        </div>

                    ))
                }
          

            </div>

        </Container>

    </section>
  )
}

export default Product
