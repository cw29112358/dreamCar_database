const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = require('./schemaOptions');

const child = new Schema({
  name: String,
}, options);

const example = new Schema({
  name: {
    type: String,

    // 也可以写在schema.pre('validate'，cb)和exampleController里面schema.validate((err) => {})
    // 自定义验证器
    // validate: {
    //   validator: (val) => {
    //     return /^c/.test(val)
    //   },
    //   message: '{VALUE} is not allow'
    // }

  },
  age: {
    type: Number,

    // 内建验证器
    // min: [50, '年龄太小']
  },

  // child是另一个Schema
  // children: [child],

  avatar: {
    type: Schema.Types.Mixed,
  },

  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profile',
  }
}, options);

// // document 的生命周期
// // this 指向当前 document
//
// // init前执行
// schema.pre('init', function() {
//   console.log('do some before init');
// });
//
// // init后执行
// schema.post('init', function(doc) {
//   console.log('do some after init', doc._id);
// });
//
// // 验证前执行
// schema.pre('validate', function() {
//   console.log(this);
//   console.log('do some before validate');
// });
//
// // 验证后执行
// schema.post('validate', function(doc) {
//   console.log(this);
//   console.log('do some after validate', doc._id);
// });
//
// // 保存前执行
// schema.pre('save', function(next) {
//   console.log(this);
//   console.log('do some before save');
//   next();
// });
//
// // 保存后执行
// schema.post('save', function(doc) {
//   console.log(this);
//   console.log('do some after save', doc._id);
// });
//
// // 删除前执行
// schema.pre('remove', function(doc) {
//   console.log('do some before remove', doc._id);
// });
//
// // 删除后执行
// schema.post('remove', function(doc) {
//   console.log('do some after remove', doc._id);
// });

const examples = mongoose.model('example', example);

module.exports = examples;
