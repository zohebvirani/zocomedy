import cx from 'classnames'

import NavItem from './nav_item'

const NavMenu = ({ className }) => (
  <ul className={cx('navbar-nav', className || 'mt-lg-1 ml-lg-5')}>
    <NavItem href="#about" className={className}>
      About
    </NavItem>
    <NavItem href="#shows" className={className}>
      Shows
    </NavItem>
    <NavItem href="#book" className={className}>
      Book
    </NavItem>
    <NavItem href="#subscribe" className={className}>
      Subscribe
    </NavItem>
    <style jsx>{`
      .hero-menu {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </ul>
)

export default NavMenu
