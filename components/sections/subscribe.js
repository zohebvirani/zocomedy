import cx from 'classnames'

import Container from '~/components/container'
import Section from './section'
import Subtitle from '~/components/subtitle'

const ContactSection = ({ className, shows }) => (
  <Section id="subscribe" className={cx('subscribe', className)}>
    <Container>
      <Subtitle className={className}>Subscribe</Subtitle>
      <div id="subscribe-form">
        <form
          action="https://zocomedy.us7.list-manage.com/subscribe/post?u=b72dd82d16df672f295546070&amp;id=22e2a25d59"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="form-group">
            <label htmlFor="mce-EMAIL">
              Subscribe to my mailing list to hear about shows
            </label>
            <input
              type="email"
              name="EMAIL"
              className="email form-control"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
          </div>
          <div className="hide" aria-hidden="true">
            <input
              type="text"
              name="b_b72dd82d16df672f295546070_22e2a25d59"
              tabIndex="-1"
            />
          </div>
          <button type="submit" name="subscribe" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </Container>
    <style jsx global>{`
      .hide {
        display: none;
      }
      .subscribe-form {
        display: flex;
        padding: 75px;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
      }
      .subscribe-form form {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
      }
      label {
        font-size: 32px;
      }
      input[type='email'] {
        max-width: 550px;
        width: 90vw !important;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1px) {
        input,
        button {
          font-size: 32px !important;
        }
        label {
          font-size: 32px !important;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1px) {
        input,
        button {
          font-size: 18px !important;
        }
        label {
          font-size: 18px !important;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px),
        @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px) {
        input,
        button {
          font-size: 32px !important;
        }
        input {
          padding: 30px 15px !important;
        }
        label {
          font-size: 32px !important;
        }
      }
    `}</style>
  </Section>
)

export default ContactSection
