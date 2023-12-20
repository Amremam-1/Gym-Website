import "../../styles/menu.css"
import { navLinks } from "../header/Header"

const Manu = () => {
  return (
    <div className="menu-list">
      <ul className="menur">
        {navLinks.map((item) => (
          <li className="nav-item">
            <a href={item.path}>{item.display}</a>
          </li>
        ))}
      </ul>

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
  )
}

export default Manu
