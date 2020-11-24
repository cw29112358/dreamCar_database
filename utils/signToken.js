const jwt = require('jsonwebtoken');
const jwtPrivateKey = require('config').get('Customer.jwtPrivateKey');

const signToken = (_id) => {
  const options = {
    algorithm: 'HS256', // 加密算法
    expiresIn: '1d', // 过期时间
  }
  return jwt.sign({ _id }, jwtPrivateKey, options);
}

module.exports = signToken;
