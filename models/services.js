const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServicesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true },
);
const Services = mongoose.model('Services', ServicesSchema);
module.exports = Services;
