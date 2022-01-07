import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Notifications</a>
      <a href="/about" className="navbar-item">Settings</a>
      <a href="/portfolio" className="navbar-item">FAQ</a>
      <a href="/shop" className="navbar-item">User</a>
  </section>
  )

}

export default Navbar;