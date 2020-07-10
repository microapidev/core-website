const CustomError = require('../../utils/customError');
const responseHandler = require('../../utils/responsehandler');

// Models
const ServiceModel = require('../../models/services');

const addNewService = async (req, res, next) => {
  const { name, slug, baseUrl } = req.body;
  if (!name || !slug || !baseUrl) {
    return new CustomError(422, 'Please fill all required fields');
  }
  const service = await new ServiceModel({
    name,
    slug,
    baseUrl,
  });
  try {
    const savedService = await service.save();
    return responseHandler(
      res,
      201,
      savedService,
      'Service created successfully',
    );
  } catch (err) {
    return next(
      new CustomError(
        500,
        'Something went wrong, please try again',
        err.message,
      ),
    );
  }
};

module.exports = addNewService;
