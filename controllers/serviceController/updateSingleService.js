const mongoose = require('mongoose');
const CustomError = require('../../utils/customError');
const responseHandler = require('../../utils/responsehandler');

// Models
const ServiceModel = require('../../models/services');

const updateSingleService = async (req, res, next) => {
  const { serviceId } = req.params;
  const { serviceName, serviceUrl } = req.body;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    next(new CustomError(400, 'Invalid serviceId'));
    return;
  }

  try {
    const service = await ServiceModel.findById({
      _id: serviceId,
    });

    if (!service) {
      next(new CustomError(404, 'Service not found'));
      return;
    }

    // update service
    service.name = serviceName;
    service.baseUrl = serviceUrl;

    // save updated service
    const updatedService = await service.save();

    return responseHandler(
      res,
      200,
      updatedService,
      'Service updated successfully',
    );
  } catch (error) {
    next(new CustomError(400, 'An error occured updating service'));
  }
};

module.exports = updateSingleService;
