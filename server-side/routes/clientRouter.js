const express = require('express');
const clientService = require('../services/clientService');
const cache = require('../middlware/cache');
const  protect  = require("../middlware/protect");

const router = express.Router();


router.route('/clients')
.get(cache.checkCache, protect.protect, clientService.getAllClient)
.post(clientService.createClient);

router.route('/client/:id')
.get(cache.checkCache, protect.protect, clientService.getClient)
.put(cache.checkCache, protect.protect, clientService.updateClient)
.delete(cache.checkCache, protect.protect, clientService.deleteClient)


module.exports = router;