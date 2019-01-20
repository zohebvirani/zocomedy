import cx from 'classnames'

import Container from '~/components/container'
import Section from './section'
import ShowsList from '~/components/shows_list/shows_list'
import Subtitle from '~/components/subtitle'

const ShowsSection = ({ className, shows }) => (
  <Section id="shows" className={cx('shows', className)}>
    <Container>
      <Subtitle className={className}>Upcoming Shows</Subtitle>
      <ShowsList shows={shows} />
    </Container>
  </Section>
)

export default ShowsSection
