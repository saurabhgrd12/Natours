const express = require('express');
const tourController = require('./../conrollers/tourController');

const router = express.Router();

// router.param('id',tourController.checkID);
router
  .route('/')
  .get(tourController.getAllTours)
  // .post(tourController.checkBody, tourController.createTour);
  .post(tourController.createTour);
  router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;