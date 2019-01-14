import cx from 'classnames'

const NavLink = ({ active, className, children, href }) => {
  return (
    <li className={cx('nav-item', { active })}>
      <a className={cx('nav-link', className)} href={href || '#'}>
        {children}
        {active ? <span className="sr-only">(current)</span> : ''}
      </a>
      <style jsx>{`
        .nav-item {
          padding: 0 10px;
        }
        .nav-link {
          font-size: 1.75rem;
        }
        .hero-menu {
          font-size: 2rem;
        }
      `}</style>
    </li>
  )
}

export default NavLink
