import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust delay if you want

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="tm-top-header">
        <div className="container">
          <div className="tm-top-header-inner">

            <div className="tm-logo-container">
              <img src="/img/logo.png" alt="Logo" className="tm-site-logo" />
              <h1 className="tm-site-name tm-handwriting-font">Cafe House</h1>
            </div>

            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>

            <nav className="tm-nav">
              <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/today-special">Today Special</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="https://www.lincovate.com/#/videos"><i><strong>Lincovate</strong></i></a></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section className="tm-welcome-section">
        <div className="container tm-position-relative">

          <div className="tm-lights-container">
            <img src="/img/light.png" alt="Light" className="light light-1" />
            <img src="/img/light.png" alt="Light" className="light light-2" />
            <img src="/img/light.png" alt="Light" className="light light-3" />
          </div>

          <div className="row tm-welcome-content">

            <h2 className="white-text tm-handwriting-font tm-welcome-header">
              Welcome To Cafe House
            </h2>

            <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>

            <p className="gray-text tm-welcome-description">
              Cafe House template is a mobile-friendly responsive Bootstrap layout.
            </p>

            <a href="#main" className="tm-more-button tm-more-button-welcome">
              Details
            </a>

          </div>

          <img src="/img/table-set.png" alt="Table Set" className="tm-table-set img-responsive" />

        </div>
      </section>

      {/* MAIN SECTION */}
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">

          {/* BEST COFFEE */}
          <section className="tm-section row">
            <div className="col-lg-9 col-md-9 col-sm-8">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                The Best Coffee for you
              </h2>
              <h2>Cafe House</h2>
              <p>This is a website template from Lincovate technologies. To find us or see videos of website like this please press the link next to this <a href="https://www.lincovate.com/#/videos">Video link</a> </p>
           <a href="#" class="tm-more-button margin-top-30">Read More</a> 
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div class="inline-block shadow-img">
              <img src="img/1.jpg" alt="Image" class="img-circle img-thumbnail"/>  
            </div>              
          </div>            
        </section>          
        <section class="tm-section tm-section-margin-bottom-0 row">
          <div class="col-lg-12 tm-section-header-container">
            <h2 class="tm-section-header gold-text tm-handwriting-font"><img src="img/logo.png" alt="Logo" class="tm-site-logo"/> Popular Items</h2>
            <div class="tm-hr-container"><hr class="tm-hr"/></div>
          </div>
          <div class="col-lg-12 tm-popular-items-container">
            <div class="tm-popular-item">
              <img src="img/popular-1.jpg" alt="Popular" class="tm-popular-item-img"/>
              <div class="tm-popular-item-description">
                <h3 class="tm-handwriting-font tm-popular-item-title"><span class="tm-handwriting-font bigger-first-letter">a</span>mericano</h3><hr class="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div class="order-now-container">
                  <a href="#" class="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div class="tm-popular-item">
              <img src="img/popular-2.jpg" alt="Popular" class="tm-popular-item-img"/>
              <div class="tm-popular-item-description">
                <h3 class="tm-handwriting-font tm-popular-item-title"><span class="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3><hr class="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div class="order-now-container">
                  <a href="#" class="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div class="tm-popular-item">
              <img src="img/popular-3.jpg" alt="Popular" class="tm-popular-item-img"/>
              <div class="tm-popular-item-description">
                <h3 class="tm-handwriting-font tm-popular-item-title"><span class="tm-handwriting-font bigger-first-letter">m</span>ocha</h3><hr class="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div class="order-now-container">
                  <a href="#" class="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
          </div>  

            <div className="col-lg-3 col-md-3 col-sm-4">
              <img src="/img/1.jpg" alt="Coffee" className="img-circle img-thumbnail" />
            </div>
          </section>

        

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;