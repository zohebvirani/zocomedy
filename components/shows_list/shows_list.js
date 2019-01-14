import ShowRow from './show_row'

const ShowsList = ({ shows }) => (
  <div className="show-list">
    {shows.map((show, i) => (
      <ShowRow key={i} show={show} />
    ))}
    {shows.length === 0 ? (
      <div className="no-shows">
        <a href="#subscribe">Subscribe to stay up to date..</a>
      </div>
    ) : null}
    <style jsx>{`
      .show-list {
        height: 450px;
        overflow: auto;
        background-color: #eee;
        border-radius: 10px;
        box-shadow: inset 0 -10px 30px -10px #999;
      }
      .no-shows {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        text-shadow: 2px 2px 5px #b8cef5;
        height: 100%;
      }
      .no-shows a,
      .no-shows a:active,
      .no-shows a:visited {
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default ShowsList
