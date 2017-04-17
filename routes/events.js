const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req,res,next) => {
  db.from('events')
  .innerJoin('venues','events.venue_id', 'venues.id')
  .innerJoin('tickets','events.id', 'tickets.events_id')
  .innerJoin('attendees_tickets', 'tickets.id', 'attendees_tickets.ticket_id')
  .innerJoin('attendees', 'attendees.id', 'attendees_tickets.attendee_id')
    .then(events => {
      res.render('events/index', {events});
  })
});

router.get('/:id', (req,res,next) => {
  let over21 = req.query.over_21
  console.log(req.query);
  db.from('events')
  .where('events.over_21', over21)
    .then(event => {
      console.log(event);
      res.render('events/show', event[0]);
  })
});



router.get('/:id', (req,res,next) => {
  let id = req.params.id
  db.from('events')
  .innerJoin('venues','events.venue_id', 'venues.id')
  .innerJoin('tickets','events.id', 'tickets.events_id')
  .innerJoin('attendees_tickets', 'tickets.id', 'attendees_tickets.ticket_id')
  .innerJoin('attendees', 'attendees.id', 'attendees_tickets.attendee_id')
  .where('events.id', id)
  .first()
    .then(event => {
      res.render('events/show', {event});
  })
});







module.exports = router;
