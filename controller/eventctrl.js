'use strict';
const mongodb = require('../config/db.js')
const Event = require('../models/events.js')

exports.postEvent = function* () {
  const eventData = this.request.body;
  console.log('eventData: ', eventData);
  const newEvent = new Event({
    title: eventData.title,
    date: new Date(eventData.date),
    venue: eventData.venue
  });
  console.log(newEvent);
  yield newEvent.save()

  this.body = 'done!';
};

exports.postEventManual = function* () {

  var event1 = new Event({
    title: 'Brief history of Space Shuttle program jc 2',
    date: Date.now(),
    venue: 'NASA History Museum'
  });

  var event2 = new Event({
    title: 'Why did the Challenger explode? - jc 2',
    date: Date.now(),
    venue: 'Albert II Library Building'
  });

  event1.save(function (err, tryEvent) {
    if (err) return console.error(err);
  })

  event2.save(function (err, tryEvent) {
    if (err) return console.error(err);
  })

}

exports.getEvents = function* () {
  console.log('in controller getEvents');
  this.body = yield Event.find();
}

exports.deleteAll = function *() {
  yield Event.remove();
  this.body = 'deleted!'
};
