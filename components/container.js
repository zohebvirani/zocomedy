import cx from 'classnames'

const Container = ({ children, className }) => (
  <div className={cx('containercontainer', className)}>
    {children}
    <style jsx>{`
      .containercontainer {
        margin: 0 auto;
        width: 85vw;
        max-width: 1410px; // matches width of max logo
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
        .containercontainer {
          width: 90vw;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px) {
        .containercontainer {
          width: 85vw;
        }
      }
    `}</style>
  </div>
)

export default Container
