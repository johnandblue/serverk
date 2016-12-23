const mongoose = require('mongoose');


const EventsSchema = mongoose.Schema({
  title: String,
  date: Date,
  venue: String
});

const Event = mongoose.model('Event', EventsSchema);

module.exports = Event;
