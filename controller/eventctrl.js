'use strict';
const mongodb = require('../config/db.js')
const Event = require('../models/events.js')

exports.postEvent = function* () {
  yield Event.postMessage(this.request.body);
  console.log(this.status = 201);
}

exports.postEventMan = function* () {

  var event1 = new Event({
    title: 'Brief history of Space Shuttle program jc',
    date: Date.now(),
    venue: 'NASA History Museum'
  });

  var event2 = new Event({
    title: 'Why did the Challenger explode?',
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
};
