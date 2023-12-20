import logo from "../../assets/img/dumble.png"
import "../../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="" />
              </div>
              <h2>Fitbody</h2>
            </div>
            <p>
              Has the ability to understand the needs and goals of each
              individual and provides personal support and guidance.
            </p>
          </div>

          <div className="footer-box company">
            <h3 className="footer-title">Company</h3>

            <ul className="footer-links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#">Our Plan</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer-box Quick">
            <h3 className="footer-title">Quick Links</h3>

            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="footer-title">Discover</h3>

            <ul className="footer-links socials">
              <li>
                <a href="#">
                  <i className="ri-facebook-circle-fill facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-fill instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-twitter-fill twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-linkedin-box-fill linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
