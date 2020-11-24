const users = require('../modal/users');
const profiles = require('../modal/profiles');
const members = require('../modal/members');
const jwt = require('jsonwebtoken');
const Response = require('../utils/response');
const jwtPrivateKey = require('config').get('Customer.jwtPrivateKey');
const signToken = require('../utils/signToken');
const success = 'success';
const fail = 'fail';
const url = require('url');

exports.logInByJwtToken = async (req, res) => {
  const { token } = req.headers;

  if (!!token) {

    try {

      // 解码token
      const _id = await jwt.verify(token, jwtPrivateKey);

      // 找对应 profile
      const findProfile = await profiles.findOne({ _id });

      return res.json(Response(success, findProfile))

    } catch (err) {
      // 如果解码失败，则发送401，显示无效 token

      return res.status(401).json(Response(fail, '无效token。'));
    }
  }
  // 如果 token 过期，则发送401，显示token过期

  return res.status(401).json(Response(fail, 'token过期'));
}

exports.login = async (req, res) => {
  const result= url.parse('127.0.0.1:3000/api/auth/local/?phoneNumber=15151515151&password=test123');  //第一个参数是地址    第二个参数是true的话表示把get传值转换成对象
  console.log(result);

  const { phoneNumber, password } = req.body;

  // 找对应 user
  const findUser = await users.findOne({ phoneNumber });

  // 如果用户存在
  if (findUser) {
    // 如果用户密码输入正确
    if (findUser.password === password) {

      // 找对应 profile
      const findProfile = await profiles.findOne({ phoneNumber });

      // 找对应的member
      const findMember = await members.findOne({ profile: findProfile._id })

      // 加入 token 返回给前端
      // 需要修改，更新token的方法有错误
      const token = signToken(findProfile._id);

      return res.json(Response(success, [findProfile, token, findMember]))
    } else { // 如果用户密码输入不正确
      return res.json(Response(fail, '您输入的密码不正确'));
    }
  }
  // 如果用户不存在
  return res.json(Response(fail, '该用户尚未注册，请先注册'));
}

exports.signUp = async (req, res, next) => {
  const { phoneNumber } = req.body;

  // 根据phoneNumber找用户
  const findUsers = await users.findOne({ phoneNumber });

  // 如果用户存在，发送错误
  if (findUsers) {
    return res.json(Response(fail, '该手机号码已经注册，请登录'));
  }
  // 如果用户不存在
  // 生成用户信息
  const profile = new profiles({ phoneNumber });
  // 生成用户
  const user = new users({ ...req.body });
  // 保存用户信息到 profiles 表
  profile.save((err) => {
    if (err) {
      return next(err);
    }
  })
  // 保存用户到 users 表
  user.save((err) => {
    if (err) {
      return next(err);
    }
  })
  // 加入 token 返回给前端
  const token = signToken(profile._id);

  return res.json(Response(success, [profile, token]));
}

exports.changePassword = async (req, res, next) => {
  const { phoneNumber, password } = req.body;
  const findUsers = await users.findOne({ phoneNumber });
  // 如果用户存在的情况
  if (findUsers) {
    // 如果新密码与旧密码相同的情况
    if (password === findUsers.password) {
      return res.json(Response(fail, '不能使用原来的密码'));
    }
    // 修改密码成功
    return users.update({ phoneNumber }, { $set: { password } }, { new: true }, (err, result) => {
      if (err) next(err);
      return res.json(Response(success, result));
    })
  }
  // 如果用户不存在的情况
  return res.json(Response(fail, '该用户尚未注册，请先注册'));
}
