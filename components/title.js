import { Fragment } from 'react'

const Title = ({ children, className }) => (
  <Fragment>
    <h1 className={className}>{children}</h1>

    <style jsx>{`
      h1 {
        display: inline-block;
        font-family: 'Permanent Marker', sans-serif;
        top: 0px;
        margin: 0;
        padding: 0;
        z-index: 10;
      }
    `}</style>
  </Fragment>
)

export default Title
