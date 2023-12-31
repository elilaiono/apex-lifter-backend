const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.getAll);

router.get('/check-email', userController.checkEmailExists)

router.get('/:id', userController.getById);

router.post('/add', userController.createUser);

module.exports = router;