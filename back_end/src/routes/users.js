const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/all', userController.showAll); // Show all users (for update/delete)

router.get('/:id/edit', userController.edit); // Form edit user
router.put('/:id', userController.update); // Update user
router.delete('/:id', userController.delete); // Xóa user

router.get('/create', userController.create); // Tạo user
router.post('/store', userController.store); // Submit form create user

router.get('/:slug', userController.show); // Show 1 user

module.exports = router;
