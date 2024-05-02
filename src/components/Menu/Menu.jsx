import React, { useEffect } from 'react'
import './menu.css'
import { Button, Card, Container } from 'react-bootstrap'

import menu1 from '../../assets/Images/menu-1.png'
import menu2 from '../../assets/Images/menu-2.png'
import menu3 from '../../assets/Images/menu-3.png'
import menu4 from '../../assets/Images/menu-4.png'
import menu5 from '../../assets/Images/menu-5.png'
import menu6 from '../../assets/Images/menu-6.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const menu =[

    {
        img:menu1
    },

    {
        img:menu2
    },

    {
        img:menu3
    },

    {
        img:menu4
    },

    {
        img:menu5
    },

    {
        img:menu6
    },
]

const Menu = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (

    <section className='menu' id='menu'>

        <Container>

            <h1 className="heading">
                our <span>menu</span>
            </h1>

            <div className="row box-container">

                {/* {
                    menu.map((item,index) =>(

                        <div className="col-lg-4 box" key={index * Math.random}>

                            <img src={item.img} alt="" />
                            <h4>tasty and healthy</h4>

                            <div className="price">
                                Rs.79 <span>30</span>
                            </div>

                            <Nav.Link href="#" className="btn">
                                add to cart
                            </Nav.Link>

                        </div>

                    ))
                } */}

                {
                    menu.map((item,index) =>(

                        <div className="col-lg-4 box">

                            <Card className='card text-center' data-aos="fade-down-right">

                                <Card.Img src={item.img} className='img' data-aos="flip-right"/>
                                <Card.Body>

                                    <Card.Title>tasty and healthy</Card.Title>
                                    <Card.Text className='price'>
                                        Rs.79 <span>30</span>
                                    </Card.Text>

                                    <Button className='btn'>Add to Cart</Button>
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

export default Menu
