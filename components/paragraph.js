const Paragraph = ({ children, className }) => (
  <p className={className}>
    {children}
    <style jsx>{`
      p {
        margin: 0;
      }
      p.dark {
        color: white;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px) {
        p {
          font-size: 32px;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
        p {
          font-size: 18px;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px) {
        p {
          font-size: 24px;
        }
      }
    `}</style>
  </p>
)

export default Paragraph
