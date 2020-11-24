const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = require('./schemaOptions');

const carSchema = new Schema({
  make: String, // 品牌
  model: String, // 型号
  year: Number, // 年份
  price: Number, // 价格
  carType: String, // 类型
  images: [String], // 图片
  // 是否收藏
  isFavorite: {
    type: Boolean,
    default: false,
  },
  // 制造国家
  madeIn: {
    type: String,
    default: '中国',
  },
  // 区域
  Area: {
    type: String,
    default: '上海',
  },
  // 城市
  cite: {
    type: String,
    default: '上海'
  },
  // 从动轮
  drivenWheels: {
    type: String,
    default: '四驱',
  },
  // 引擎
  engine: {
    type: String,
    default: '4.4L V8',
  },
  // 发动机油缸
  engineCylinders: {
    type: Number,
    default: 8,
  },
  // 发动机尺寸
  engineSize: {
    type: Number,
    default: 4.8,
  },
  // 油箱容量
  fuelCapacity: {
    type: String,
    default: '50 升',
  },
  // 汽油种类
  FuelType: {
    type: String,
    default: '98',
  },
  // 发票价格
  invoicePrice: {
    type: Number,
    default: 5000
  },
  // 贷款利率
  loanRate: {
    type: Number,
    default: 20
  },
  // 牌照
  LicensePlate: {
    type: String,
    default: '',
  },
  // 里程
  mileage: {
    type: Number,
    default: 10000
  },
  // 几门
  numberOfDoors: {
    type: Number,
    default: 4,
  },
  // 颜色
  color: {
    type: String,
    default: 'black',
  },
  // 大小
  size: {
    type: String,
    default: 'middle'
  },
  // 传动方式
  TransmissionType: {
    type: String,
    default: 'automatic'
  },
}, options);

const cars = mongoose.model('car', carSchema);

module.exports = cars;
