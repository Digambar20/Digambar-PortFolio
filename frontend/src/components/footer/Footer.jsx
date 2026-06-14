import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section py-5" id="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <h5 className="footer-title">CONTACT DETAILS</h5>
            <ul className="footer-list list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/digambar-khekade204"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin footer-icon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Digambar20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github footer-icon" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:digambarkhekade79@gmail.com">
                  <i className="fas fa-envelope footer-icon" />
                  digambarkhekade79@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <i className="fas fa-map-marker-alt footer-icon" />
                  Nagpur, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="footer-title">SERVICES</h5>
            <ul className="footer-list list-unstyled">
              <li>Website Development</li>
              <li>Others</li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="footer-title">LINKS</h5>
            <ul className="footer-list list-unstyled">
              <li>
                <a href="#summary">Summary</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="footer-title">FOLLOW US</h5>
            <div className="footer-social-list">
              <a
                href="https://www.linkedin.com/in/digambar-khekade204"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/Digambar20"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-note text-center mt-4">
          © {new Date().getFullYear()} Digambar Khekade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
