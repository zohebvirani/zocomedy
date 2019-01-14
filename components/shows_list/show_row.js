import CalIcon from '~/components/cal_icon'

require('date-format-lite')

const ShowRow = ({ show }) => (
  <div className="show-row">
    <div className="icon">
      <CalIcon date={show.date} />
    </div>
    <div className="content">
      <div className="title">{show.title}</div>
      <div className="date">
        <i className="fas fa-calendar-day" />
        &nbsp;
        <span>{show.date.format('MMMM DD @ H:mmA')}</span>
      </div>
      <div className="location">
        <i className="fas fa-map-marker-alt" />
        &nbsp;
        <span>{show.location}</span>
      </div>
    </div>
    <style jsx>{`
      .show-row {
        display: flex;
        margin: 25px 30px;
      }
      .title {
        font-size: 2rem;
      }
      .content {
        flex: 1;
        padding: 10px 20px;
      }
      .date {
        white-space: nowrap;
        font-size: 1.5rem;
      }
      .location {
        white-space: nowrap;
        font-size: 1.5rem;
      }
    `}</style>
  </div>
)

export default ShowRow
