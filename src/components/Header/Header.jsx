import React, { useEffect, useRef } from 'react'
import './header.css'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/Images/logo.png'

import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";

import {cart} from '../../../src/Image'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Header = () => {

    const navbarRef = useRef()

    const searchRef = useRef()

    const cartRef = useRef()

    // const navbarHandler = () =>{

    //     navbarRef.current.classList.toggle("active")
    //     searchRef.current.classList.remove("active")
    //     cartRef.current.classList.remove("active")
    // }

    const searchHandler = () =>{

        searchRef.current.classList.toggle("active")
        navbarRef.current.classList.remove("active")
        cartRef.current.classList.remove("active")

    }

    const cartHandler = () =>{

        cartRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        navbarRef.current.classList.remove("active")
    }

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    
    <>
    
        <Navbar expand="lg" className="header" data-aos="fade-down">

                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id='basic-navbar-nav'>

                    <Nav className="me-auto navbar" ref={navbarRef}>
                        
                        <Nav.Link className='head' href="#home">Home</Nav.Link>
                        <Nav.Link className='head' href="#about">About</Nav.Link>
                        <Nav.Link className='head' href="#menu">Menu</Nav.Link>
                        <Nav.Link className='head' href="#product">Product</Nav.Link>
                        <Nav.Link className='head' href="#review">Review</Nav.Link>
                        <Nav.Link className='head' href="#contact">Contact</Nav.Link>
                        <Nav.Link className='head' href="#blog">Blog</Nav.Link>
                        
                    </Nav>

                    <div className='icons'>

                        <CiSearch className="search" id="search-btn" onClick={searchHandler}/>
    
                        <BsCart className="cart" id='cart-btn' onClick={cartHandler}/>
                       
                    </div>

                    <div className="search-form" ref={searchRef}>

                        <input type="search" id="search-box" placeholder='search here...' />
                        <label htmlFor="search-box">
                            <CiSearch className='search'/>
                        </label>

                    </div>

                    <div className="cart-items-container" ref={cartRef}>

                        {
                            cart.map((item,index) =>(

                                <div className="cart-item" key={index * Math.random}>

                                    <span className='times'>
                                        <CiTimer />
                                    </span>
                                    <img src={item.img} alt="img" />

                                    <div className="content">

                                        <h6>Cart Item</h6>
                                        <div className="price">Rs.99</div>

                                    </div>

                                </div>

                            ))
                        }

                        <Nav.Link href='#' className='btn'>
                            checkout now
                        </Nav.Link>

                    </div>

                </Navbar.Collapse>

        </Navbar>

    </>

  )
}

export default Header
