import { Fragment } from 'react'

import NavMenu from './nav_menu'

const Nav = () => (
  <Fragment>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavMenu className="navbarnavbar" />
    </div>
  </Fragment>
)

export default Nav
