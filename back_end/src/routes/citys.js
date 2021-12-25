const express = require('express');
const router = express.Router();
const cityController = require('../app/controllers/CityController');

router.get('/all', cityController.showAll); // Show all citys (for update/delete)

router.get('/:id/edit', cityController.edit); // Form edit city
router.put('/:id', cityController.update); // Update city
router.delete('/:id', cityController.delete); // Xóa city

router.get('/create', cityController.create); // Tạo city
router.post('/store', cityController.store); // Submit form create city

router.get('/:slug', cityController.show); // Show 1 city

module.exports = router;
