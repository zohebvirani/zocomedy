require('date-format-lite')

const CalIcon = ({ date }) => (
  <div className="cal-icon">
    <div className="month">{date.format('MMM')}</div>
    <div className="day">{date.format('DD')}</div>
    <style jsx>{`
      .cal-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-radius: 10px;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        padding: 5px 30px 25px 30px;
      }
      .month {
        font-size: 2.5rem;
      }
      .day {
        font-size: 4.5rem;
        line-height: 2.75rem;
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        .cal-icon {
          padding: 5px 15px 20px 15px;
          font-size: 1rem;
        }
        .month {
          font-size: 1.25rem;
        }
        .day {
          font-size: 2.75rem;
          line-height: 1.375rem;
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px) {
        .cal-icon {
          font-size: 2rem;
          padding: 5px 30px 25px 30px;
        }
        .month {
          font-size: 2.5rem;
        }
        .day {
          font-size: 4.5rem;
          line-height: 2.75rem;
        }
      }
    `}</style>
  </div>
)

export default CalIcon
