require('date-format-lite')

const date = new Date()
const year = date.format('YYYY')

const Footer = ({ className }) => (
  <div className="footer">
    {`©${year} Zoheb Virani`}
    <style jsx>{`
      .footer {
        background-color: black;
        color: white;
        font-size: 1.25rem;
        padding: 10px;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Footer
