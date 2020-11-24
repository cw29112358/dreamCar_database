const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = require('./schemaOptions');

const usersSchema = new Schema({
  phoneNumber: String,
  password: String,
}, options);

const users = mongoose.model('user', usersSchema);

module.exports = users;
