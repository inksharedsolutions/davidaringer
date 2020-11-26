import PropTypes from "prop-types"
import React from "react"
import Nav from './navigation'


const Header = ({ siteTitle }) => (
	
  <header>
    <Nav navList={
        ['Home', 
        'About the author', 
        'About the book', 
        'Contact']} />
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
