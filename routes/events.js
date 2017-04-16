const express = require('express');
const router = express.Router();
const db = require('../db');


/* GET users listing. */
router.get('/', (req, res, next) => {
  db.from('events')
  .innerJoin('venues','venues.id', 'events.venue_id')
  .innerJoin('tickets', 'tickets.id', 'tickets.events_id')
  .innerJoin('attendees_tickets', 'attendees_tickets.ticket_id', 'tickets.id')
  .then(events => {
    console.log(events);
    res.render('events/index', {events});
  })
});


router.get('/:id',(req,res,next) => {
    let id = req.params.id
    db.from('events')
    .innerJoin( 'venues', 'venues.id', 'events.venue_id')
    .innerJoin('tickets', 'tickets.id', 'tickets.events_id')
    .innerJoin('attendees_tickets', 'attendees_tickets.ticket_id', 'tickets.id')
    .where('events.id', id)
    .first()
    .then(event => {
        res.render('events/show', {event});
      })
    })


module.exports = router;
