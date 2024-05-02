import React, { useEffect } from 'react'
import './blog.css'

import blog1 from '../../assets/Images/blog-1.jpeg'
import blog2 from '../../assets/Images/blog-2.jpeg'
import blog3 from '../../assets/Images/blog-3.jpeg'
import { Button, Card, Container } from 'react-bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

const blogs = [

    {
        img:blog1
    },

    {
        img:blog2
    },

    {
        img:blog3
    },
]

const Blog = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (

    <section className="blogs" id="blogs">

        <Container>

            <h2 className='heading'>
                our <span>blogs</span>
            </h2>

            <div className="row box-container" data-aos="zoom-in-right">

                {/* {
                    blogs.map((item,index) =>(

                        <div className="col-lg-4 box" key={index * Math.random()}>

                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>

                            <div className="content">

                                <Nav.Link href='#' className='title'>
                                    tasty and refreshing spices
                                </Nav.Link>

                                <span>by admin / 21st march, 2024</span>

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, fugiat.
                                </p>

                                <Nav.Link href='#' className='btn'>
                                    read more
                                </Nav.Link>

                            </div>

                        </div>
                    ))
                } */}

                {
                    blogs.map((item,index) =>(

                        <div className="col-lg-4 box" key={index * Math.random()}>

                            <Card className='card'>

                                <Card.Img src={item.img} className='image'/>

                                <Card.Body className='content'>

                                    <Card.Title className='title'>tasty and refreshing spices</Card.Title>
                                    <span>by admin / 21st march, 2024</span>
                                    <Card.Text>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, fugiat.
                                    </Card.Text>

                                    <Button className='btn'>Read More</Button>
                                    
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

export default Blog
