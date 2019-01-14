import { Fragment } from 'react'

const SubTitle = ({ children, className }) => (
  <Fragment>
    <h2 className={className}>{children}</h2>
    <style jsx>{`
      h2 {
        display: inline-block;
        font-family: 'Permanent Marker', sans-serif;
        font-size: 3.5rem;
        text-shadow: 2px 2px 5px #b8cef5;
        top: 0px;
        margin: 0;
        padding: 25px 0;
        z-index: 10;
        color: black;
      }
      .dark {
        color: white;
      }
    `}</style>
  </Fragment>
)

export default SubTitle
