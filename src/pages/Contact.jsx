import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
const Contact = () => {
  const [loading, setLoading] = useState(true);

  // Preloader fix
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // PRELOADER
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
              <h1 className="tm-site-name tm-handwriting-font">
                Cafe House
              </h1>
            </div>

            <nav className="tm-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/today-special">Today Special</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact" className="active">Contact</Link></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
      
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
        &nbsp;Contact Us&nbsp;&nbsp;
        <img src="/img/header-line.png" alt="Line" className="tm-header-line" />
      </h2>

      <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>

      <p className="gray-text tm-welcome-description">
        Cafe House is a <span className="gold-text"> Lincovate responsive Bootstrap production</span> Contact us at <a href="https://www.lincovate.com/#/contact" target="blank">Lincovate Contact link</a>
      </p>

      <a href="#main" className="tm-more-button tm-more-button-welcome">
        Message Us
      </a>
    </div>

    <img
      src="/img/table-set.png"
      alt="Table Set"
      className="tm-table-set img-responsive"
    />
  </div>
</section>



      {/* CONTACT FORM */}
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">

          <section className="tm-section row">

            <h2 className="col-lg-12 margin-bottom-30">
              Send us a message
            </h2>

            <form className="tm-contact-form">

              <div className="col-lg-6 col-md-6">

                <input className="form-control" placeholder="NAME" />
                <input className="form-control" placeholder="EMAIL" />
                <input className="form-control" placeholder="SUBJECT" />
                <textarea className="form-control" rows="6" placeholder="MESSAGE" />

                <button className="tm-more-button" type="submit">
                  Send message
                </button>

              </div>

              <div className="col-lg-6 col-md-6">
                {/* GOOGLE MAP EMBED (NO API KEY NEEDED) */}
                <iframe
                  title="Nyeri Map"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=Nyeri,Kenya&output=embed"
                ></iframe>
              </div>

            </form>

          </section>

        </div>
      </div>

     <Footer/>
    </>
  );
};

export default Contact;