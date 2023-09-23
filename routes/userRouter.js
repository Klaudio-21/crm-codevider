
const express = require('express');
const userService = require('../services/userService');
const cache =   require('../middlware/cache');
const protect = require('../middlware/protect');
const upload = require('../config/upload')
const router = express.Router();





router.post('/signup', userService.signup)
router.post('/login',userService.login)
router.post('/logout', userService.logout)

router.route('/users')
.get(cache.checkCache, protect.protect, userService.getAllUsers)
.post( userService.createUser)

router.route('/user/:id')
.get( cache.checkCache, protect.protect, userService.getUser)
.put( cache.checkCache, protect.protect, userService.updateUser) 
.delete( cache.checkCache, protect.protect, userService.deleteUser);

router.route('/upload/:id')
.post(upload.single('profilePhoto'),protect.protect, userService.upload);
  





module.exports = router;