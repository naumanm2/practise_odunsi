import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">max</Link>
        </div>
        <div className="nav-menu">
          <nav>
            <Link to="/about">about</Link>
            <Link to="/work">work</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
