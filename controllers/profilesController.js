const config = require('config');
const dbConfig = config.get('Customer.dbConfig');

const profiles = require('../modal/profiles');
const Response = require('../utils/response');
const success = 'success';
const fail = 'fail';

exports.findProfiles = async (req, res) => {
  const { _id } = req;
  const profile = await profiles.findOne({ _id });
  res.json(Response(success, profile))
}

exports.updateProfiles = (req, res) => {
  const {
    profileId, avatar, name, gender, birthday, email, emergencyContact, zipCode,
  } = req.body;
  profiles.findByIdAndUpdate(
    profileId,
    {
      avatar: {
        uri: `${dbConfig.http}://${dbConfig.host}:${dbConfig.testPort}/avatar/${avatar.name}`,
        name: avatar.name,
        type: avatar.type,
      },
      name,
      gender,
      birthday,
      email,
      emergencyContact,
      zipCode,
    },
    { new: true, useFindAndModify: false },
    (err, result) => {
      if (err) return res.json(Response(fail, '保存失败'));
      res.json(Response(success, result))
    }
  )
}
exports.upload = (req, res) => {
  res.send(req.file);
};
