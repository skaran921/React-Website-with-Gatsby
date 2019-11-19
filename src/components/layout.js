/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "./bootstrap.min.css"
import Footer from "./reuseable/footer"
import Navbar from "./reuseable/navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <br />

    {children}

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
