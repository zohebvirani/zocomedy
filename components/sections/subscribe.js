import cx from 'classnames'

import data from '~/data'
import Section from './section'
import Subtitle from '~/components/subtitle'

const ContactSection = ({ className, shows }) => (
  <Section id="subscribe" className={cx('subscribe', className)}>
    <div className="container">
      <Subtitle className={className}>Subscribe</Subtitle>
      <div id="subscribe-form">
        <form
          action="https://zocomedy.us7.list-manage.com/subscribe/post?u=b72dd82d16df672f295546070&amp;id=22e2a25d59"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              value=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div className="hide" aria-hidden="true">
              <input
                type="text"
                name="b_b72dd82d16df672f295546070_22e2a25d59"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
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
      .subscribe-form label {
        font-size: 36px !important;
      }
      .subscribe-form input[type='email'] {
        font-size: 50px !important;
        width: 550px !important;
      }
      .subscribe-form input[type='submit'] {
        font-size: 24px !important;
        padding: 5px !important;
      }
    `}</style>
  </Section>
)

export default ContactSection

function getMailCode() {
  return `
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://zocomedy.us7.list-manage.com/subscribe/post?u=b72dd82d16df672f295546070&amp;id=22e2a25d59" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b72dd82d16df672f295546070_22e2a25d59" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
  `
}
