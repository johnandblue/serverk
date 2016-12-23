'use strict';

const router = require('koa-router')();

const eventCtrl = require('./controller/eventctrl.js');

router.get('/events', eventCtrl.getEvents);
router.post('/events', eventCtrl.postEventMan);
router.delete('/events', eventCtrl.deleteAll);


module.exports = router;
