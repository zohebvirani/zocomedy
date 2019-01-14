const FONT_SIZE = 100
const BOT_TOP = (28 / 180) * FONT_SIZE
const MID_TOP = (18 / 180) * FONT_SIZE
const TOP_TOP = (0 / 180) * FONT_SIZE
const BOT_LFT = (14 / 180) * FONT_SIZE
const MID_LFT = (8 / 180) * FONT_SIZE
const TOP_LFT = (0 / 180) * FONT_SIZE

const Logo = ({ children }) => (
  <div id="logo" className="logo">
    {/* <div className="child bot">{children}</div> */}
    <h1>{children}</h1>
    <style jsx>{`
      .logo {
        font-family: 'Permanent Marker', sans-serif;
        font-size: ${FONT_SIZE}px;
        position: relative;
        width: 635px;
        height: 140px;
      }
      .logo::before {
        line-height ${1.5 * FONT_SIZE}px;
        position: absolute;
        top: ${BOT_TOP}px;
        left: ${BOT_LFT}px;
        color: #aaa;
        content: "${children}";
        text-shadow: 1px 1px 1px #aaa;
      }
      h1 {
        line-height ${1.5 * FONT_SIZE}px;
        position: absolute;
        top: ${MID_TOP}px;
        left: ${MID_LFT}px;
        color: #323232;
        // text-shadow: 2px 2px 2px #323232;
        font-size: ${FONT_SIZE}px;
        padding: 0;
        margin: 0;
      }
      .logo::after {
        line-height ${1.5 * FONT_SIZE}px;
        position: absolute;
        top: ${TOP_TOP}px;
        left: ${TOP_LFT}px;
        text-shadow:
          ${MID_LFT + 1}px ${MID_TOP + 1}px rgba(255, 0, 0,.5)
        ;
        color: #1462d6;
        content: "${children}";
      }
    `}</style>
  </div>
)

export default Logo
