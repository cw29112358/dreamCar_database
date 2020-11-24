// app.js
const express = require('express');
const bodyParser = require('body-parser'); // 处理req.body
const createError = require('http-errors'); // 处理errors
const path = require('path'); // 处理路径
const config = require('config'); // 部署不同环境的配置
const dbConfig = config.get('Customer.dbConfig');

const verifyToken = require('./utils/verifyToken'); // 解码token

// 路由
const exampleRouter = require('./routes/example');
const profilesRouter = require('./routes/profiles');
const usersRouter = require('./routes/users');
const inventoryRouter = require('./routes/inventory');
const memberRouter = require('./routes/member');

// mongoose 连接 MongoDB
const mongoose = require('mongoose');
// 使用账户密码连接
// const url = `mongodb://${dbConfig.dbUser}:${dbConfig.dbPassword}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;
const url = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;
mongoose.connect(url, dbConfig.options);
// 连接成功和失败的两种状况
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error.'));
db.once('open', () => console.log(`MongoDB is connected at ${url}`));
// 示例
// db.on('connecting', () => console.log('MongoDB is connecting'));
// db.on('connected', () => console.log('MongoDB is connected'));
// db.on('disconnecting', () => console.log('MongoDB is disconnecting'));
// db.on('disconnected', () => console.log('MongoDB is disconnected'));
// db.on('uninitialized', () => console.log('MongoDB is uninitialized'));

// 创建express实例
const app = express();
// 使用静态文件夹
app.use(express.static(path.join(__dirname, 'public'), /* options */));
// 使用 body-parser 库来解析 req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /api路由
app.use('/api/example', exampleRouter);
app.use('/api/auth/local', usersRouter);
app.use('/api/profiles', verifyToken, profilesRouter);
app.use('/api/car/inventory', verifyToken, inventoryRouter);
app.use('/api/member', verifyToken, memberRouter);

// 捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404, '找不到该页面'));
});

// 错误处理程序,可以自己改写，如果不用next(err)，则基本用不到这个函数
app.use((err, req, res) => {
  res.status(err.status || 500);
  if (req.app.get('env') === 'development') {
    res.send(err);
  } else {
    res.end();
  }
});

module.exports = app;


