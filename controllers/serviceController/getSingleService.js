const mongoose = require('mongoose');
const CustomError = require('../../utils/customError');
const responseHandler = require('../../utils/responsehandler');

// Models
const ServiceModel = require('../../models/services');

const getSingleService = async (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    next(new CustomError(400, 'Invalid serviceId'));
    return;
  }

  let singleService;

  try {
    const service = await ServiceModel.findById({ _id: serviceId });
    singleService = {
      serviceId: service._id,
      serviceName: service.name,
      serviceUrl: service.baseUrl,
      isActive: service.isActive,
      createdAt: service.createdAt,
    };
  } catch (error) {
    next(new CustomError(400, 'An error occured retrieving services'));
    return;
  }
  // return array
  if (!singleService.length) {
    return responseHandler(res, 404, singleService, 'No Service found');
  }

  return responseHandler(
    res,
    200,
    singleService,
    'Service retrieved successfully',
  );
};

module.exports = getSingleService;
