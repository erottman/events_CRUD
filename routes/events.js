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

router.get('/:id/over_21', (req,res,next) => {
  let id = req.params.id
  let over21 = req.query.over_21
  console.log(over21);
  console.log('kittne', req.params.over_21);
  db.from('events')
  .innerJoin('venues','events.venue_id', 'venues.id')
  .innerJoin('tickets','events.id', 'tickets.events_id')
  .innerJoin('attendees_tickets', 'tickets.id', 'attendees_tickets.ticket_id')
  .innerJoin('attendees', 'attendees.id', 'attendees_tickets.attendee_id')
  .where('events.id', id)
  .and('events.over_21', over21)
  .first()
    .then(event => {
      res.render('events/show', {event});
  })
});





module.exports = router;
