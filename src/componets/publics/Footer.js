import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footers mt-5">
    <div className="footer-top footers">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-info">
            <h4>Tech Innovation Network</h4>
            <p>
              We are trying to connect different blue-collar labourers to industries
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/Home#services">About us</a>
              </li>
              <li>
                <a href="/Home#services">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Rama Nivas Nandalike <br></br>
              Karkala Tq, Udupi dist<br></br>
              Karnataka-India<br></br>
              <strong>Phone:</strong> +91 8884975537<br></br>
              <strong>Email:</strong> deerajrd@gmail.com<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        © Copyright <strong>Tech Innovation Network</strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by{" "}
        <a href="https://bootstrapmade.com/">
          Deeraj Devadiga<i className="fa fa-heart"></i>
        </a>
      </div>
    </div>
  </footer>
  );
}
