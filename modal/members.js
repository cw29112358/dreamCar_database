const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = require('./schemaOptions');

const membersSchema = new Schema({
  level: { type: String, default: '' },
  isMembership: { type: Boolean, default: false },
  status: { type: String, default: 'closed' },
  profile: Schema.Types.ObjectId,
}, options);

const members = mongoose.model('member', membersSchema);

module.exports = members;
