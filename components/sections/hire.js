import Container from '~/components/container'
import MailTo from '~/components/mail_to'
import Paragraph from '~/components/paragraph'
import Section from './section'
import Subtitle from '~/components/subtitle'

const Hire = ({ className }) => (
  <Section id="book" className={className}>
    <Container>
      <Subtitle className={className}>Book</Subtitle>
      <Paragraph className={className}>
        Please reach out to book me on your show. I can be reached at{' '}
        <MailTo>zohebcomedy@gmail.com</MailTo>. If this is for a Stand-Up
        booking, please use <MailTo subject>[Stand-Up]</MailTo> in the subject
        of your email.
        <br />
        <br />
        For storytelling, please use <MailTo subject>[Storytelling]</MailTo> and
        for teaching, coaching or training use{' '}
        <MailTo subject>[Coaching]</MailTo>. I am also currently looking for
        management representation and will be open to those conversations as
        well.
      </Paragraph>
    </Container>
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
