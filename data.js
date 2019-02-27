const data = {
  shows: [
    // {
    //   title: 'Stand Up Show',
    //   date: '1/11/2018',
    //   time: '12:00', // military time
    //   location: 'StageWorks'
    // },
    {
      title: 'Zo @ Bar Fluxus',
      date: '2/2/2019',
      time: '19:00', // military time
      location: 'Bar Fluxus'
    },
    {
      title: 'Drifstone @ Harold Night',
      date: '2/6/2019',
      time: '21:00', // military time
      location: 'Stage Werx Theatre'
    },
    {
      title: 'Zipper Dipper in Divination Intervention - Improv ',
      date: '2/6/2019',
      time: '19:30', // military time
      location: 'ETC South'
    },    
    {
      title: 'Zo @ The Set Up ',
      date: '2/6/2019',
      time: '19:30', // military time
      location: 'ETC South'
    },
    {
      title: 'Drifstone @ Harold Night',
      date: '2/20/2019',
      time: '21:00', // military time
      location: 'Stage Werx Theatre'
    },
    {
      title: 'Zipper Dipper in Divination Intervention - Improv ',
      date: '2/22/2019',
      time: '19:30', // military time
      location: 'ETC South'
    },
    {
      title: 'Drifstone @ Harold Night',
      date: '2/27/2019',
      time: '21:00', // military time
      location: 'Stage Werx Theatre'
    },
    {
      title: 'Zipper Dipper in Divination Intervention - Improv ',
      date: '3/8/2019',
      time: '19:30', // military time
      location: 'ETC South'
    },
    {
      title: 'Drifstone @ Harold Night',
      date: '3/13/2019',
      time: '21:00', // military time
      location: 'Stage Werx Theatre'
    },
    {
      title: 'Drifstone @ Harold Night',
      date: '3/20/2019',
      time: '21:00', // military time
      location: 'Stage Werx Theatre'
    },
    {
      title: 'Zipper Dipper in Divination Intervention - Improv ',
      date: '3/22/2019',
      time: '19:30', // military time
      location: 'ETC South'
    },
    {
      title: 'Zo @ Rooster T Feathers Competition ',
      date: '3/27/2019',
      time: '20:00', // military time
      location: 'Rooster T Feathers'
    },
    
  ]
}

// data parsing...
data.shows = data.shows.map(show => ({
  ...show,
  date: new Date(`${show.date} ${show.time} PST`)
}))

module.exports = data
