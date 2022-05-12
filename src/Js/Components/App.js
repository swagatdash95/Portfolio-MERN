import React from 'react';
import '../../css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../css/App.css';
import '../../css/templatemo-style.css';

import NavBar from './NavBar';
import Home from './Home';
import Work from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import About from './About';
import Social from './Social';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div data-spy="scroll" data-target="#rock-navigation">
        {/* <NavBar /> */}
        <Home />
        <Work />
        <Skills />
        <Resume />
        <About />
        <Social />
        <Contact />
        <Footer />
        {/* <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/smoothscroll.js"></script>
        <script src="js/jquery.nav.js"></script>
        <script src="js/isotope.js"></script>
        <script src="js/imagesloaded.min.js"></script>
        <script src="js/custom.js"></script> */}
      </div>
    </div>
  );
}

export default App;
