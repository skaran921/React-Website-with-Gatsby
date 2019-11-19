import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"
export default class Navbar extends Component {
  state = {
    navBarState: false,
    navBarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        menuText: "Home",
        url: "/",
      },
      {
        id: 2,
        menuText: "About",
        url: "/about",
      },
      {
        id: 3,
        menuText: "Services",
        url: "/services",
      },
      {
        id: 4,
        menuText: "Contact",
        url: "/contact",
      },
    ],
  }

  myToggler = () => {
    this.state.navBarState
      ? this.setState({
          navBarState: false,
          navBarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navBarState: true,
          navBarClass: "collapse navbar-collapse show ",
        })
  }
  render() {
    return (
      <div className="navbar navbar-expand-md bg-theme fixed-top text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} style={{ width: "40px" }} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          onClick={this.myToggler}
          type="button"
        >
          <span className="text-white ">menu</span>
        </button>

        <div className={this.state.navBarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(m => {
              return (
                <li className="nav-item">
                  <Link
                    to={m.url}
                    className="nav-link"
                    style={{ color: "#fff" }}
                  >
                    {m.menuText}
                  </Link>
                </li>
              )
            })}

            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#fff" }}>
                <FaCartArrowDown />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
