const jwt = require('jsonwebtoken');
const Response = require('../utils/response');
const jwtPrivateKey = require('config').get('Customer.jwtPrivateKey');

// 解码 token
const verifyToken = async (req, res, next) => {
  // 找到请求头中的token
  const { token } = req.headers;
  // 如果没有 token，则拒绝访问
  if (!token) {
    return res.json(Response('fail', '拒绝访问。'));
  }

  // 如果有 token，则继续访问
  try {

    // 解码token
    const decoded = await jwt.verify(token, jwtPrivateKey);
    // 把解码后的 token 放在请求头的 _id 属性中
    req._id = decoded['_id'];

    next();
  } catch (e) {

    // 如果 token 过期，则发送401，显示无效 token
    res.set('token', '')
    return res.status(401).json(Response('fail', '无效token。'));
  }
}

module.exports = verifyToken;
