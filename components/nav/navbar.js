import CSSTransition from 'react-transition-group/CSSTransition'
import debounce from 'lodash.debounce'
import { PureComponent } from 'react'

import Nav from './nav'
import Subtitle from '~/components/subtitle'

class Navbar extends PureComponent {
  state = {
    hide: true
  }

  constructor() {
    super()
    this._handleOnScroll = debounce(this._handleOnScroll, 100, { maxWait: 200 })
  }

  componentDidMount() {
    // check scroll position
    this._handleOnScroll()
    window.addEventListener('scroll', this._handleOnScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleOnScroll)
  }

  _handleOnScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    this._$logo = this._$logo || document.getElementById('logo')
    const show = scrollTop > this._$logo.offsetTop + 75
    this.setState({ hide: !show })
  }

  render() {
    return (
      <CSSTransition
        in={!this.state.hide}
        classNames="fade"
        unmountOnExit
        timeout={300}
      >
        {state => (
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Subtitle className="navbar-brand ml-lg-5 dark">
              <a className="header-link" href="#">
                Zoheb Virani
              </a>
            </Subtitle>
            <Nav />
            <style jsx>{`
              .navbar {
                background-color: #030303 !important;
                opacity: 0;
                transition: opacity 0.3s;
                box-shadow: 0 0 2px #555;
              }
              .navbar.fade-enter {
                opacity: 0;
              }
              .navbar.fade-enter-active {
                opacity: 1;
              }
              .navbar.fade-enter-done {
                opacity: 1;
              }
              .navbar.fade-exit {
                opacity: 1;
              }
              .navbar.fade-exit-active {
                opacity: 0;
              }
              .navbar.fade-exit-done {
                display: none;
              }
              .header-link {
                color: white;
              }
              a,
              a:active,
              a:visited {
                text-decoration: none;
              }
            `}</style>
          </nav>
        )}
      </CSSTransition>
    )
  }
}

function getFontStyles(FONT_SIZE) {
  return [
    `font-size: ${FONT_SIZE}px`,
    `line-height: 1.5em`,
    `font-weight: bold`,
    ''
  ].join(';\n\t\t')
}

export default Navbar
