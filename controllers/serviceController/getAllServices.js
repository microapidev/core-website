const CustomError = require('../../utils/customError');
const responseHandler = require('../../utils/responsehandler');

// Models
const Services = require('../../models/services');

const getAllServices = async (req, res, next) => {
  let allServices;
  try {
    const services = await Services.find();
    allServices = services.map((service) => ({
      serviceId: service._id,
      serviceName: service.name,
      serviceUrl: service.baseUrl,
      isActive: service.isActive,
      createdAt: service.createdAt,
    }));
  } catch (error) {
    next(new CustomError(400, 'An error occured retrieving services'));
    return;
  }
  // return array
  if (!allServices.length) {
    return responseHandler(res, 404, allServices, 'No Service found');
  }

  return responseHandler(
    res,
    200,
    allServices,
    'Services retrieved successfully',
  );
};

module.exports = getAllServices;
