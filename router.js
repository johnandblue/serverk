'use strict';

const router = require('koa-router')();

const eventCtrl = require('./controller/eventctrl.js');

router.get('/events', eventCtrl.getEvents);
router.post('/eventsman', eventCtrl.postEventManual);
router.post('/events', eventCtrl.postEvent);
router.delete('/events', eventCtrl.deleteAll);


module.exports = router;
