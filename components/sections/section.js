import cx from 'classnames'

const Section = ({ children, className, id }) => (
  <div id={id}>
    <div className={cx('section', className)}>{children}</div>
    <style jsx>{`
      .section {
        text-align: left;
        padding: 4vw 0 5vw 0;
      }
      .nopad {
        padding: 0;
      }
      .dark {
        background-color: black;
      }
      .dark h2 {
        color: white;
      }
      .photo {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      }
      .shows {
      }
    `}</style>
  </div>
)

export default Section
