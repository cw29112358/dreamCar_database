const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = require('./schemaOptions');

const profilesSchema = new Schema({
  avatar: {
    type: Schema.Types.Mixed,
    default: {
      uri: '',
      name: '',
      type: '',
    }
  },
  name: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  birthday: { type: Date, default: undefined },
  gender: { type: String, default: '' },
  email: { type: String, default: '' },
  emergencyContact: { type: String, default: '' },
  zipCode: { type: String, default: '' },
}, options);

const profiles = mongoose.model('profile', profilesSchema);

module.exports = profiles;
