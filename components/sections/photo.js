import Section from './section'

const PhotoSection = ({ children }) => (
  <Section id="photo" className="nopad">
    <div className="photo">{children}</div>
    <style jsx>{`
      .photo {
        height: 100vh; // this should be dynamic, right now it's fixed based on a min max offset
        background-size: cover;
        background-image: url('/static/zocomedy@2x.png');
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </Section>
)

export default PhotoSection
