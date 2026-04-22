import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
const TodaySpecial = () => {
  const [loading, setLoading] = useState(true);

  // PRELOADER EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const popularItems = [
    { img: "/img/popular-1.jpg", title: "Americano" },
    { img: "/img/popular-2.jpg", title: "Cappuccino" },
    { img: "/img/popular-3.jpg", title: "Mocha" },
    { img: "/img/popular-1.jpg", title: "Americano" },
    { img: "/img/popular-2.jpg", title: "Cappuccino" },
    { img: "/img/popular-3.jpg", title: "Mocha" },
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
      <header className="tm-top-header">
        <div className="container">
          <div className="tm-top-header-inner">

            <div className="tm-logo-container">
              <img src="/img/logo.png" alt="Logo" className="tm-site-logo" />
              <h1 className="tm-site-name tm-handwriting-font">
                Cafe House
              </h1>
            </div>

            <nav className="tm-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                  <Link to="/today-special" className="active">
                    Today Special
                  </Link>
                </li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

          </div>
        </div>
      </header>

      {/* WELCOME SECTION */}
      <section className="tm-welcome-section">
        <div className="container tm-position-relative">

          <div className="tm-lights-container">
            <img src="/img/light.png" alt="light" className="light light-1" />
            <img src="/img/light.png" alt="light" className="light light-2" />
            <img src="/img/light.png" alt="light" className="light light-3" />
          </div>

          <div className="row tm-welcome-content">
            <h2 className="white-text tm-handwriting-font">
              Today’s Special
            </h2>

            <h2 className="gold-text">Cafe House</h2>

            <p className="gray-text">
              Cafe House serves the best coffee and meals in town.
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

      {/* MAIN SECTION */}
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">
          <section class="tm-section row">
          <div class="col-lg-12 tm-section-header-container">
            <h2 class="tm-section-header gold-text tm-handwriting-font"><img src="img/logo.png" alt="Logo" class="tm-site-logo"/> Today's Special</h2>
            <div class="tm-hr-container"><hr class="tm-hr"/></div>
          </div>          
          <div class="col-lg-12 tm-special-container margin-top-60">
            <div class="tm-special-container-left"> 
              <div class="tm-special-item">
                <div class="tm-special-img-container">
                  <img src="img/special-1.jpg" alt="Special" class="tm-special-img img-responsive"/>  
                  <a href="#">
                    <div class="tm-special-description">
                      <h3 class="tm-special-title">Donec pede justo</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>  
                    </div>            
                  </a>
                </div>
              </div>
            </div>
            <div class="tm-special-container-right"> 
              <div>
                <div class="tm-special-item">
                  <div class="tm-special-img-container">
                    <img src="img/special-2.jpg" alt="Special" class="img-responsive"/>  
                    <a href="#">
                      <div class="tm-special-description">
                        <h3 class="tm-special-title">Etiam sit amet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>
              <div class="tm-special-container-lower">
                <div class="tm-special-item">
                  <div class="tm-special-img-container">
                    <img src="img/special-3.jpg" alt="Special" class="img-responsive"/>  
                    <a href="#">
                      <div class="tm-special-description">
                        <p>Vivamus elementum</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="tm-special-item">
                  <div class="tm-special-img-container">
                    <img src="img/special-4.jpg" alt="Special" class="img-responsive"/>  
                    <a href="#">
                      <div class="tm-special-description">
                        <p>Quisque rutrum.</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>              
            </div>
          </div>
        </section>

          {/* POPULAR ITEMS */}
          <section className="tm-section row">

            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                Popular Items
              </h2>
              <div className="tm-hr-container">
                <hr className="tm-hr" />
              </div>
            </div>

            <div className="col-lg-12 tm-popular-items-container">

              {popularItems.map((item, index) => (
                <div className="tm-popular-item" key={index}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="tm-popular-item-img"
                  />

                  <div className="tm-popular-item-description">
                    <h3 className="tm-handwriting-font tm-popular-item-title">
                      {item.title}
                    </h3>

                    <p>
                      Freshly brewed coffee made from premium beans.
                    </p>

                    <div className="order-now-container">
                      <a href="#" className="order-now-link tm-handwriting-font">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* DAILY MENU */}
          <section className="tm-section">

            <div className="row">
              <div className="col-lg-12 tm-section-header-container">
                <h2 className="tm-section-header gold-text tm-handwriting-font">
                  Daily Menu
                </h2>
                <div className="tm-hr-container">
                  <hr className="tm-hr" />
                </div>
              </div>
            </div>

            <div className="row margin-top-60">

              <div className="col-lg-4">
                <img
                  src="/img/menu-board.png"
                  alt="Menu Board"
                  className="tm-daily-menu-img"
                />
              </div>

              <div className="col-lg-8">
                <p>
                  Enjoy our fresh meals prepared daily with love and quality ingredients.
                </p>

                <ol>
                  <li>Fresh coffee blends</li>
                  <li>Organic meals</li>
                  <li>Healthy snacks</li>
                  <li>Delicious pastries</li>
                </ol>

                <a href="#" className="tm-more-button">
                  Read More
                </a>
              </div>

            </div>

          </section>

        </div>
      </div>
      <Footer/>

    </>
  );
};

export default TodaySpecial;