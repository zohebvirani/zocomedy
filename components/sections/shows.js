import cx from 'classnames'

import Section from './section'
import ShowsList from '~/components/shows_list/shows_list'
import Subtitle from '~/components/subtitle'

const ShowsSection = ({ className, shows }) => (
  <Section id="shows" className={cx('shows', className)}>
    <div className="container">
      <Subtitle className={className}>Upcoming Shows</Subtitle>
      <ShowsList shows={shows} />
    </div>
  </Section>
)

export default ShowsSection
