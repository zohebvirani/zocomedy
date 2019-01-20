import Logo from '~/components/logo2'
import NavMenu from '~/components/nav/nav_menu'
import Section from './section'

const PhotoSection = ({ children }) => (
  <Section id="photo" className="nopad">
    <div className="photo">
      <div className="herohero">
        <Logo>Zoheb Virani</Logo>
        <NavMenu className="hero-menu" />
      </div>
    </div>
    <style jsx>{`
      .photo {
        height: 95vh; // this should be dynamic, right now it's fixed based on a min max offset
        background-size: cover;
        background-image: url('/static/zocomedy.png');
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 5vh;
      }
      .nopad {
        margin-bottom: -1px;
      }
      .herohero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        .photo {
          background-image: url('/static/zocomedy@2x.png');
        }
      }
    `}</style>
  </Section>
)

export default PhotoSection
