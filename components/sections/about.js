import Container from '~/components/container'
import MailTo from '~/components/mail_to'
import Paragraph from '~/components/paragraph'
import Section from './section'
import Subtitle from '~/components/subtitle'

const About = ({ className }) => (
  <Section id="about" className={className}>
    <Container>
      <div className="about-text">
        <Subtitle className={className}>About</Subtitle>
        <Paragraph className={className}>
          Zoheb Virani is a comic based in San Francisco. Zoheb was raised in
          the South, between Texas, South Carolina and Georgia and hails zero
          southern drawl. He’s American born and his parents are from Pakistan
          and Uganda. That makes him Afrasian, except his mom is actually an
          Indian Ugandan. His whole life is a struggle on who to root for in the
          fight for Kashmir in his Cashmere.
          <br />
          <br />
          Zoheb has been performing in various forms since he was 6 years old.
          Starting off as a Pianist, followed by singing and competitively
          dancing through college and onwards. Post college, he kept his skills
          sharp by MC’ing friends weddings and giving tear jerking wedding
          speeches.
          <br />
          <br />
          Zoheb has been performing improv in San Francisco on a House Harold
          Team named Driftstone and been a part of two other local shows called
          Little Gem presents the Fork and Zipper Dipper’s Divination
          Intervention. Zoheb has been asked to be a part of San Francisco’s
          Sketchfest. As a local comic he’s making his stand-up rounds around
          San Francisco. He’s also acted in local plays and had parts in small
          film productions. Reach out to him @{' '}
          <MailTo>zohebcomedy@gmail.com</MailTo>.
        </Paragraph>
      </div>
      <style jsx>{`
        .container {
          text-align: left;
        }
      `}</style>
    </Container>
  </Section>
)

export default About
