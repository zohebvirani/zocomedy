const MailTo = ({ children, subject }) => {
  const href = subject
    ? `mailto:zohebcomedy@gmail.com?subject=${subject}`
    : `mailto:zohebcomedy@gmail.com`
  return <a href={href}>{children}</a>
}

export default MailTo
