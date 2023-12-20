import "../../styles/header.css"
import logo from "../../assets/img/dumble.png"
import { FormEvent, useEffect, useRef } from "react"
import Menu from "../UI/Menu"

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#princing",
    display: "Princing",
  },
]

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null)

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      if (headerRef.current !== null)
        headerRef.current.classList.add("stickey-header")
    } else {
      if (headerRef.current !== null)
        headerRef.current.classList.remove("stickey-header")
    }
  }

  const handleClick = (event: FormEvent) => {
    event.preventDefault()

    const targetAttr = (event.target as HTMLElement).getAttribute("href")
    const location = document.querySelector(targetAttr!) as HTMLElement | null

    if (location) {
      window.scrollTo({
        left: 0,
        top: location.offsetTop - 80,
      })
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", headerFunc)

    return () => window.removeEventListener("scroll", headerFunc)
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <h2>Fitbody</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {navLinks.map((item) => (
                <li className="nav-item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right">
            <button className="register-btn">Register</button>
            <span className="mobile-menu">
              <i className="ri-menu-line"></i>
              <Menu />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
