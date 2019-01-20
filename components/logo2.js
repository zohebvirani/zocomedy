import round from '~/utils/round'

const Logo = ({ children }) => (
  <div id="logo" className="logo">
    <h1>{children}</h1>
    <style jsx>{`
      .logo {
        font-family: 'Permanent Marker', sans-serif;
      }
      h1 {
        color: #1462d6;
        padding: 0;
        margin: 0;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
        h1 {
          ${getFontStyles(50)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1152px) {
        h1 {
          ${getFontStyles(75)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1536px) {
        h1 {
          ${getFontStyles(100)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1984px) {
        h1 {
          ${getFontStyles(125)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2400px) {
        h1 {
          ${getFontStyles(150)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1400px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 2800px) {
        h1 {
          ${getFontStyles(200)}
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1600px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 3200px) {
        h1 {
          ${getFontStyles(225)}
        }
      }
    `}</style>
  </div>
)

function getFontStyles(FONT_SIZE) {
  return [
    `font-size: ${FONT_SIZE}px`,
    `line-height: 1.5em`,
    getShadowStyles(FONT_SIZE)
  ].join(';\n\t\t')
}

function getShadowStyles(FONT_SIZE) {
  const BOT_TOP = round((28 / 180) * FONT_SIZE, 3)
  const MID_TOP = round((18 / 180) * FONT_SIZE, 3)
  const BOT_LFT = round((14 / 180) * FONT_SIZE, 3)
  const MID_LFT = round((8 / 180) * FONT_SIZE, 3)
  const textShadow = [
    `${MID_LFT}px ${MID_TOP}px 0 #323232`,
    `${MID_LFT}px ${MID_TOP}px 1px #323232`,
    `${BOT_LFT}px ${BOT_TOP}px 0 #aaa`,
    `${BOT_LFT}px ${BOT_TOP}px 1px #aaa`
  ].join(',\n\t\t\t')
  return `text-shadow: \n\t\t\t${textShadow}\n\t\t;`
}

export default Logo
