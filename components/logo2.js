const FONT_SIZE = 150
const BOT_TOP = (28 / 180) * FONT_SIZE
const MID_TOP = (18 / 180) * FONT_SIZE
const BOT_LFT = (14 / 180) * FONT_SIZE
const MID_LFT = (8 / 180) * FONT_SIZE

const Logo = ({ children }) => (
  <div id="logo" className="logo">
    {/* <div className="child bot">{children}</div> */}
    <h1>{children}</h1>
    <style jsx>{`
      .logo {
        font-family: 'Permanent Marker', sans-serif;
        font-size: ${FONT_SIZE}px;
      }
      h1 {
        line-height ${1.5 * FONT_SIZE}px;
        color: #1462d6;
        text-shadow:
          ${MID_LFT}px ${MID_TOP}px 0 #323232,
          ${MID_LFT}px ${MID_TOP}px 1px #323232,
          ${BOT_LFT}px ${BOT_TOP}px 0 #aaa,
          ${BOT_LFT}px ${BOT_TOP}px 1px #aaa
        ;
        font-size: ${FONT_SIZE}px;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>
)

export default Logo
