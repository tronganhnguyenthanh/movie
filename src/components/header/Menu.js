import React from "react"
import {Navbar} from "flowbite-react"
const Menu = () => {
 return (
  <Navbar fluid={true} className="navbar">
    <Navbar.Brand>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My movies</span>
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Navbar.Link active={true} href="/">Home</Navbar.Link>
      <Navbar.Link href="/movie/list">List movies</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
 )
}

export default Menu