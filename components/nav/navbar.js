import CSSTransition from 'react-transition-group/CSSTransition'
import cx from 'classnames'
import debounce from 'lodash.debounce'
import { PureComponent } from 'react'

import Nav from './nav'
import Title from '~/components/title'

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
            <Title className="navbar-brand ml-lg-5">
              <a style={{ fontSize: '3.25rem', color: 'white' }} href="#">
                Zoheb Virani
              </a>
            </Title>
            <Nav />
            <style jsx>{`
              .navbar {
                background-color: #030303 !important;
                opacity: 0;
                transition: opacity 0.3s;
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
            `}</style>
          </nav>
        )}
      </CSSTransition>
    )
  }
}

export default Navbar

function offsetTop(el) {
  let offsetTop = 0
  let curr = el
  if (!curr) console.log('DAFUQQ!!')
  while (curr && curr !== document.documentElement) {
    console.log(curr)
    offsetTop += curr.offsetTop
    curr = curr.parentElement
  }

  return offsetTop
}
