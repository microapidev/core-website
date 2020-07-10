const router = require('express').Router();
const servicesControlller = require('../controllers/serviceController');

// ADD NEW SERVICE
router.post('/', servicesControlller.addNewService);
// GET ALl Services
router.get('/', servicesControlller.getAllServices);
// GET A SINGLE SERVICE
router.get('/:serviceId', servicesControlller.getSingleService);
// UPDATE SINGLE SERVICE
router.patch('/:serviceId', servicesControlller.updateSingleService);
// DELETE SINGLE SERVICE
router.delete('/:serviceId', servicesControlller.deleteSingleService);

module.exports = router;
