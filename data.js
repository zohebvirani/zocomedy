const data = {
  shows: [
    // {
    //   title: 'Stand Up Show',
    //   date: '1/11/2018',
    //   time: '12:00', // military time
    //   location: 'StageWorks'
    // },
    {
      title: 'Driftstone Improv Show',
      date: '1/16/2019',
      time: '21:00', // military time
      location: 'StageWerx'
    },
    {
      title: 'Some New Show',
      date: '2/16/2019',
      time: '22:00', // military time
      location: 'Mars'
    },
    
  ]
}

// data parsing...
data.shows = data.shows.map(show => ({
  ...show,
  date: new Date(`${show.date} ${show.time} PST`)
}))

module.exports = data
