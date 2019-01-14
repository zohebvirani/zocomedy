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
    <NavItem href="#book-hire" className={className}>
      Book / Hire
    </NavItem>
    <NavItem href="#subscribe" className={className}>
      Subscribe
    </NavItem>
    <style jsx>{`
      .hero-menu {
        display: flex;
        flex-direction: row;
        text-shadow: 0 4px 1px #323232, 3px 0 1px #323232, 2px 4px #ccc,
          2px 5px 1px #aaa;
        font-weight: bold;
      }
    `}</style>
  </ul>
)

export default NavMenu
