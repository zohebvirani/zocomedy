import cx from 'classnames'

import Section from './section'
import MailTo from '~/components/mail_to'
import Subtitle from '~/components/subtitle'

const Hire = ({ className }) => (
  <Section id="book-hire" className={className}>
    <div className={cx('container', className)}>
      <Subtitle className={className}>Book / Hire</Subtitle>
      <p>
        Please reach out to book me on your show. I can be reached at{' '}
        <MailTo>zohebcomedy@gmail.com</MailTo>. If this is for a Stand-Up
        booking, please use <MailTo subject>[Stand-Up]</MailTo> in the subject
        of your email.
        <br />
        <br />
        For storytelling, please use <MailTo subject>[Storytelling]</MailTo> and
        for teaching, coaching or training <MailTo subject>[Coaching]</MailTo>.
        I am also currently looking for management representation and will be
        open to those conversations as well.
      </p>
    </div>
    <style jsx>{`
      p {
        color: black;
        font-size: 2rem;
      }
      .dark p {
        color: white;
      }
    `}</style>
  </Section>
)

export default Hire
