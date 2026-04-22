import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
const Menu = () => {
  const [loading, setLoading] = useState(true);

  // PRELOADER EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      img: "/img/menu-1.jpg",
      title: "Americano 1",
      desc: "Rich espresso with hot water for a smooth taste.",
      price: 30,
    },
    {
      img: "/img/menu-2.jpg",
      title: "Americano 2",
      desc: "Balanced coffee with deep aroma and flavor.",
      price: 20,
    },
    {
      img: "/img/menu-3.jpg",
      title: "Americano 3",
      desc: "Light roast with smooth finish.",
      price: 15,
    },
    {
      img: "/img/menu-4.jpg",
      title: "Americano 4",
      desc: "Strong coffee blend for bold taste.",
      price: 25,
    },
    {
      img: "/img/menu-5.jpg",
      title: "Americano 5",
      desc: "Premium blend with rich crema.",
      price: 45,
    },
  ];

  // SHOW PRELOADER FIRST
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
     
  {/* HEADER */}
  <div className="tm-top-header">
    <div className="container">
      <div className="row">
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/today-special">Today Special</Link></li>
              <li><Link to="/menu" className="active">Menu</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>

  {/* WELCOME */}
  <section className="tm-welcome-section">
    <div className="container tm-position-relative">

      <div className="tm-lights-container">
        <img src="/img/light.png" alt="Light" className="light light-1" />
        <img src="/img/light.png" alt="Light" className="light light-2" />
        <img src="/img/light.png" alt="Light" className="light light-3" />
      </div>

      <div className="row tm-welcome-content">
        <h2 className="white-text tm-handwriting-font tm-welcome-header">
          <img src="/img/header-line.png" alt="Line" className="tm-header-line" />
          &nbsp;Our Menus&nbsp;&nbsp;
          <img src="/img/header-line.png" alt="Line" className="tm-header-line" />
        </h2>

        <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>

        <p className="gray-text tm-welcome-description">
          Cafe House template is a mobile-friendly responsive. Check the template out. You can order it by contyacting lincovate technologies and making an <a href="https://www.lincovate.com/#/appointments">Appointments</a>
        </p>

        <a href="#main" className="tm-more-button tm-more-button-welcome">
          Read More
        </a>
      </div>

      <img
        src="/img/table-set.png"
        alt="Table Set"
        className="tm-table-set img-responsive"
      />
    </div>
  </section>

  {/* MAIN */}
  <div className="tm-main-section light-gray-bg">
    <div className="container" id="main">

      <section className="tm-section row">

        <div className="col-lg-9 col-md-9 col-sm-8">
          <h2 className="tm-section-header gold-text tm-handwriting-font">
            Variety of Menus
          </h2>
          <h2>Cafe House</h2>

          <p className="tm-welcome-description">
            This is a free template adapted to React.
          </p>

          <a href="#" className="tm-more-button margin-top-30">
            Read More
          </a>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
          <div className="inline-block shadow-img">
            <img
              src="/img/1.jpg"
              alt="Image"
              className="img-circle img-thumbnail"
            />
          </div>
        </div>

      </section>

      {/* MENU SECTION */}
      <section className="tm-section row">

        <div className="col-lg-12 tm-section-header-container margin-bottom-30">
          <h2 className="tm-section-header gold-text tm-handwriting-font">
            <img src="/img/logo.png" alt="Logo" className="tm-site-logo" />
            Our Menus
          </h2>
          <div className="tm-hr-container">
            <hr className="tm-hr" />
          </div>
        </div>

        {/* SIDE MENU */}
        <div className="col-lg-3 col-md-3">
           <nav class="tm-side-menu">
                  <ul>
                    <li><a href="#" class="active">Affogato</a></li>
                    <li><a href="#">Caffè Americano</a></li>
                    <li><a href="#">Caffè latte</a></li>
                    <li><a href="#">Coffee milk</a></li>
                    <li><a href="#">Café mocha</a></li>
                    <li><a href="#">Cappuccino</a></li>
                    <li><a href="#">Espresso</a></li>
                    <li><a href="#">Iced coffee</a></li>
                    <li><a href="#">Instant coffee</a></li>
                    <li><a href="#">Mocha</a></li>
                    <li><a href="#">black coffee</a></li>
                  </ul>              
                </nav>    


          <img
            src="/img/vertical-menu-bg.png"
            alt="Menu bg"
            className="tm-side-menu-bg"
          />
        </div>

        {/* PRODUCTS */}
        <div className="col-lg-9 col-md-9">

          {[1, 2, 3, 4, 5].map((num) => (
            <div className="tm-product" key={num}>

              <img src={`/img/menu-${num}.jpg`} alt="Product" />

              <div className="tm-product-text">
                <h3 className="tm-product-title">Americano {num}</h3>
                <p className="tm-product-description">
                  Freshly brewed premium coffee.
                </p>
              </div>

              <div className="tm-product-price">
                <span className="tm-product-price-link tm-handwriting-font">
                  <span className="tm-product-price-currency">$</span>
                  {num * 10}
                </span>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  </div>


     <Footer/>
    </>
  );
};

export default Menu;