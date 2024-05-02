import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Product';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>

      <Header/>
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />

    </>
  );
}

export default App;
