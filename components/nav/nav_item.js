import cx from 'classnames'

import round from '~/utils/round'

const NavLink = ({ active, className, children, href }) => {
  return (
    <li className={cx('nav-item', { active })}>
      <a className={cx('nav-link', className)} href={href || '#'}>
        {children}
        {active ? <span className="sr-only">(current)</span> : ''}
      </a>
      <style jsx>{`
        .navbarnavbar.nav-link {
          color: rgba(175, 210, 255);
          opacity: 0.5;
        }
        .hero-menu {
          padding: 0 1vw;
        }
        .hero-menu:hover,
        .hero-menu:active {
          color: #439dff;
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
          .nav-item {
            padding: 0;
            ${getFontStyles(35)}
          }
          .hero-menu {
            padding: 0 1vw;
            ${getFontStyles(20, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1152px) {
          .nav-item {
            ${getFontStyles(35)}
          }
          .hero-menu {
            ${getFontStyles(25, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1536px) {
          .nav-item {
            ${getFontStyles(32)}
          }
          .hero-menu {
            ${getFontStyles(35, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1984px) {
          .nav-item {
            padding: 0 0.25vw;
            ${getFontStyles(32)}
          }
          .hero-menu {
            ${getFontStyles(45, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2400px) {
          .nav-item {
            padding: 0 0.75vw;
            ${getFontStyles(42)}
          }
          .hero-menu {
            ${getFontStyles(55, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1400px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2800px) {
          .nav-item {
            ${getFontStyles(52)}
          }
          .hero-menu {
            ${getFontStyles(65, true)}
          }
        }
        @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1600px),
          only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 3200px) {
          .nav-item {
            ${getFontStyles(52)}
          }
          .hero-menu {
            ${getFontStyles(70, true)}
          }
        }
      `}</style>
    </li>
  )
}

function getFontStyles(FONT_SIZE, hasShadow) {
  return [
    `font-size: ${FONT_SIZE}px`,
    `line-height: 1.5em`,
    `font-weight: ${hasShadow ? 'bold' : 'normal'}`,
    hasShadow ? getShadowStyles(FONT_SIZE) : ''
  ].join(';\n\t\t')
}

function getShadowStyles(FONT_SIZE) {
  const BOT_TOP = round((20 / 180) * FONT_SIZE, 3)
  const MID_TOP = round((15 / 180) * FONT_SIZE, 3)
  const BOT_LFT = round((10 / 180) * FONT_SIZE, 3)
  const MID_LFT = round((8 / 180) * FONT_SIZE, 3)
  const textShadow = [
    `${MID_LFT}px ${MID_TOP}px 0 #323232`,
    `${MID_LFT}px ${MID_TOP}px 1px #323232`,
    `${BOT_LFT}px ${BOT_TOP}px 0 #aaa`,
    `${BOT_LFT}px ${BOT_TOP}px 1px #aaa`
  ].join(',\n\t\t\t')
  return `text-shadow: \n\t\t\t${textShadow}\n\t\t;`
}

export default NavLink
