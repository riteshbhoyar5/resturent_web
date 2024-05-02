import React, { useEffect } from "react";
import "./home.css";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

import AOS from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <section className="home" id="home" data-aos="fade-left">

      <Container>

        <div className="content">

            <h3>
            Fresh
            <span> Food in the </span>
            Morning
            </h3>

            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
            quo alias Excepturi fuga iste saepe.
            </p>

            <Nav.Link href="#" className="btn">
            Get Yours Now
            </Nav.Link>

        </div>

      </Container>

    </section>
  );
};

export default Home;
