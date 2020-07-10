const mongoose = require('mongoose');
// Utilities
const CustomError = require('../../utils/customError');
const responseHandler = require('../../utils/responsehandler');

// Models
const ServiceModel = require('../../models/services');

const deleteSingleService = async (req, res, next) => {
  const { serviceId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) return next(new CustomError(400, 'Invalid Id'));

  try {
    // find comment in application
    const service = await ServiceModel.findOneAndDelete({
      _id: serviceId,
    });
    if (!service) {
      return next(new CustomError(400, 'Service not found'));
    }
    // const deleting = await Comments.findByIdAndDelete(commentId);
    return responseHandler(
      res,
      200,
      service,
      'Service successfully deleted',
    );
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteSingleService;
