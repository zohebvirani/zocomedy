import { Fragment } from 'react'

import round from '~/utils/round'

const SubTitle = ({ children, className }) => (
  <Fragment>
    <h2 className={className}>{children}</h2>
    <style jsx>{`
      h2 {
        display: inline-block;
        font-family: 'Permanent Marker', sans-serif;
        top: 0px;
        margin: 0;
        z-index: 10;
        color: black;
        padding: 0 0 3vw 0;
      }
      .navbar-brand {
        display: inline-block;
        padding: 0;
        padding-right: 1.25vw;
      }
      .dark {
        color: white;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
        h2 {
          ${getFontStyles(45)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1152px) {
        h2 {
          ${getFontStyles(50)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1536px) {
        h2 {
          ${getFontStyles(55)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1984px) {
        h2 {
          ${getFontStyles(65)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2400px) {
        h2 {
          ${getFontStyles(70)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1400px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2800px) {
        h2 {
          ${getFontStyles(75)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1600px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 3200px) {
        h2 {
          ${getFontStyles(80)}
        }
      }
    `}</style>
  </Fragment>
)

function getFontStyles(FONT_SIZE) {
  return [
    `font-size: ${FONT_SIZE}px`,
    `font-weight: bold`,
    getShadowStyles(FONT_SIZE)
  ].join(';\n\t\t')
}

function getShadowStyles(FONT_SIZE) {
  const TOP = round((10 / 180) * FONT_SIZE, 3)
  const LFT = round((5 / 180) * FONT_SIZE, 3)
  return `
    position: relative;
    top: -${TOP}px;
    text-shadow: ${LFT}px ${TOP}px 2px #439dff;
  `
}

export default SubTitle
