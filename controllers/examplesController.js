const exampleSchemas = require('../modal/example');
const config = require('config');
const dbConfig = config.get('Customer.dbConfig');
const Response = require('../utils/response');
const success = 'success';
const fail = 'fail';

// populate 示例
// 在result对象中需要有profile这个key，而且profile的值是profiles表里面存在的ObjectId
// schemaModel.findOne({ option: 'option' }).populate({ path: 'profile'}).exec().then(result => console.log(result)).catch(err => console.log(err));
// schemaModel.findOne({ option: 'option' }).populate({ path: 'profile' }).exec((err, result) => {
//   if (err) return next(err);
//   return res.send(result)
// })

exports.find = (req, res) => {
  res.json(Response(success, {
    uri: `${dbConfig.http}://${dbConfig.host}:${dbConfig.testPort}/avatar/3006F403-501C-4202-9554-FF274537E513.jpg`
  }))
}

exports.save = async (req, res, next) => {
  // Model.bulkWrite（）
  // Model.mapReduce（）
  // Model.aggregate（）
  // Model.geoSearch（）

  // create
  // cb 形式
  exampleSchemas.create(req.body, (err, doc) => {
    if (err) return res.json(Response(fail, '保存失败'));
    return res.json(Response(success, doc));
  })
  // promise形式
  // exampleSchemas
  //   .create(req.body)
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '保存失败')));

  // save
  // const example = new exampleSchemas(req.body);
  // // cb形式
  // example.save((err, doc, numAffected) => {
  //   console.log(numAffected); // 当文档成功保存到MongoDB时，它将为1，否则为0
  //   if (err) return res.json(Response(fail, '保存失败'));
  //   return res.json(Response(success, doc));
  // })
  // promise形式
  // example
  //   .save()
  //   .then((doc => res.json(Response(success, doc))))
  //   .catch(() => res.json(Response(fail, '保存失败')))

  // remove
  // cb形式
  // exampleSchemas.remove({ _id: '5d97654d63e230113ff9ff33' }, (err, result) => {
  //   if (err) return res.json(Response(fail, '删除失败'));
  //   return res.json(Response(success, result));
  // })
  // promise形式
  // exampleSchemas.remove({ _id: '5d97629145d7261064536ed1' })
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '删除失败')))

  // deleteOne
  // cb形式
  // exampleSchemas.deleteOne({ name: 'chen' }, (err, result) => {
  //   if (err) return res.json(Response(fail, '删除失败'));
  //   return res.json(Response(success, result));
  // })
  // promise形式
  // exampleSchemas
  //   .deleteOne({ name: 'chen' })
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '删除失败')));

  // deleteMany
  // cb形式
  // exampleSchemas.deleteMany({name: /chen/}, (err, result) => {
  //   if (err) return res.json(Response(fail, '删除失败'));
  //   return res.json(Response(success, result));
  // })
  // promise形式
  // exampleSchemas
  //   .deleteMany({name: 'chen'})
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '删除失败')));

  // find
  // cb形式
  // exampleSchemas.find({ name: 'chen' }, 'name age', { age: { $lt: 18 } }, (err, doc) => {
  //   if (err) return res.json(Response(fail, '操作失败'));
  //   return res.json(Response(success, doc));
  // })
  // promise形式
  // exampleSchemas
  //   .find({ name: 'chen' }, 'name age', { age: { $lt: 18 } })
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '操作失败')));
  // promise+链式 待修改
  // exampleSchemas
  //   .find()
  //   .where('name')
  //   .equals('chen')
  //   .where('age')
  //   .gte(18)
  //   .lte(50)
  //   .select('name age')
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(fail, '操作失败'));

  // findById
  // cb形式
  // exampleSchemas.findById('5d977731e620661300457064', 'name age', { age: { $lt: 18 } }, (err, doc) => {
  //   if (err) return res.json(Response(fail, '操作失败'));
  //   return res.json(Response(success, doc));
  // })
  // promise形式
  // exampleSchemas
  //   .findById('5d977731e620661300457064', 'name age', { age: { $lt: 50 } })
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '操作失败')));
  // promise+链式 待修改
  // exampleSchemas
  //   .findById('5d977731e620661300457064')
  //   .where('age')
  //   .gte(18)
  //   .lte(50)
  //   .select('name age')
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '读取失败')))

  // findOne 方法
  // cb形式
  // exampleSchemas.findOne({name: 'chen'}, 'name age', { age: { $lt: 18} }, (err, doc) => {
  //   if (err) return res.json(Response(fail, '操作失败'));
  //   return res.json(Response(success, doc));
  // });
  // promise形式
  // exampleSchemas
  //   .findOne({name: 'chen'}, 'name age', { age: { $lt: 18} })
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '操作失败')));
  // promise+链式 待修改
  // exampleSchemas
  //   .findOne()
  //   .where('name')
  //   .equals('chen')
  //   .where('age')
  //   .gte(18)
  //   .lte(50)
  //   .select('name age')
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '读取失败')))

  // findOneAndUpdate
  // cb形式
  // exampleSchemas.findOneAndUpdate(
  //   { name: 'chen' },
  //   { age: 29 },
  //   {
  //     new: true,
  //     upsert: false,
  //     fields: 'name age',
  //     maxTimeMS: 2000,
  //     useFindAndModify: false,
  //     // sort:
  //     // runValidators: true,
  //     // setDefaultsOnInsert: true,
  //     // rawResult: true,
  //     // strict: true,
  //   },
  //   (err, doc) => {
  //     if (err) return res.json(Response(fail, '更新失败'));
  //     return res.json(Response(success, doc));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .findOneAndUpdate(
  //     {name: 'chen'},
  //     {age: 30},
  //     // options
  //   )
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '更新失败')))

  // findByIdAndUpdate
  // cb形式
  // exampleSchemas.findByIdAndUpdate(
  //   '5d977731e620661300457064',
  //   {age: 29},
  //   {
  //         new: true,
  //         upsert: false,
  //         select: 'name age',
  //         useFindAndModify: false,
  //         // sort:
  //         // runValidators: true,
  //         // setDefaultsOnInsert: true,
  //         // rawResult: true,
  //         // strict: true,
  //   },
  //   (err, doc) => {
  //     if (err) return res.json(Response(fail, '更新失败'));
  //     return res.json(Response(success, doc));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .findByIdAndUpdate(
  //     '5d977731e620661300457064',
  //     {age: 30},
  //     // options
  //   )
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '更新失败')))

  // findOneAndRemove
  // cb形式
  // exampleSchemas.findOneAndRemove(
  //   {name: 'chen'},
  //   {
  //     select: 'name age',
  //     useFindAndModify: false,
  //     // sort:
  //     // maxTimeMS:
  //     // rawResult: true,
  //     // strict: true,
  //   },
  //   (err, doc) => {
  //     if (err) return res.json(Response(fail, '删除失败'));
  //     return res.json(Response(success, doc));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .findOneAndRemove(
  //     {name: 'chen'},
  //     // options
  //   )
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '删除失败')))

  // findByIdAndRemove
  // cb形式
  // exampleSchemas.findByIdAndRemove(
  //   '5d9786962392e317f2fb61a3',
  //   {
  //     select: 'name age',
  //     useFindAndModify: false,
  //     // sort:
  //     // rawResult: true,
  //     // strict: true,
  //   },
  //   (err, doc) => {
  //     if (err) return res.json(Response(fail, '删除失败'));
  //     return res.json(Response(success, doc));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .findByIdAndRemove(
  //     '5d9786972392e317f2fb61a4',
  //     // options
  //   )
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(fail, '删除失败'));

  // insertMany
  // cb形式
  // exampleSchemas.insertMany([req.body, req.body], options, (err, doc) => {
  //   if (err) return res.json(Response(fail, '保存失败'));
  //   return res.json(Response(success, doc));
  // })
  // promise形式
  // exampleSchemas
  //   .insertMany(
  //     [req.body, req.body],
  //     // options
  //   )
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '保存失败')))

  // count
  // cb形式
  // exampleSchemas.count({name: 'chen'}, (err, count) => {
  //   if (err) return res.json(Response(fail, '读取失败'));
  //   return res.json(Response(success, count));
  // })
  // promise形式
  // exampleSchemas
  //   .count({name: 'chen'})
  //   .then((count) => res.json(Response(success, count)))
  //   .catch(() => res.json(Response(fail, '读取失败')));

  // update
  // cb形式
  // exampleSchemas.update(
  //   {name: 'chen'},
  //   {age: 20},
  //   {
  //     // multi: true,
  //     // runValidators: true,
  //     // setDefaultsOnInsert: true,
  //     // strict: true,
  //     // overwrite: false,
  //     // upsert: false,
  //     // safe: true,
  //   },
  //   (err, result) => {
  //     if (err) return res.json(Response(fail, '更新失败'));
  //     return res.json(Response(success, result));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .update(
  //     {name: 'chen'},
  //     {age: 21},
  //     // options,
  //   )
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '更新失败')))

  // updateMany
  // cb形式
  // exampleSchemas.updateMany(
  //   {name: 'chen'},
  //   {age: 22},
  //   // options,
  //   (err, result) => {
  //     if (err) return res.json(Response(fail, '更新失败'));
  //     return res.json(Response(success, result));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .updateMany(
  //     {name: 'chen'},
  //     {age: 23},
  //     // options,
  //   )
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(success, '更新失败')));

  // updateOne
  // cb形式
  // exampleSchemas.updateOne(
  //   {name: 'chen'},
  //   {age: 24},
  //   // options,
  //   (err, result) => {
  //     if (err) return res.json(Response(fail, '更新失败'));
  //     return res.json(Response(success, result));
  //   }
  // )
  // promise形式
  // exampleSchemas
  //   .updateOne(
  //     {name: 'chen'},
  //     {age: 25},
  //     // options,
  //   )
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '更新失败')));

  // replaceOne
  // cb形式
  // exampleSchemas.replaceOne(
  //   {name: 'chen'},
  //   {age: 26},
  //   // options,
  //   (err, result) => {
  //     if (err) return res.json(Response(fail, '替换失败'));
  //     return res.json(Response(success, result));
  //   }
  // )
  // promise形式
  // exampleSchemas.replaceOne(
  //   {name: 'chen'},
  //   {age: 27},
  //   // options,
  // )
  //   .then((result) => res.json(Response(success, result)))
  //   .catch(() => res.json(Response(fail, '替换失败')));

  // populate
  // cb形式
  // exampleSchemas.findOne(
  //   {name: 'chen'},
  //   (err, result) => {
  //     if (err) return res.json(Response(fail, '操作失败'));
  //     result.populate(
  //       'profile',
  //       // options,
  //       (err, doc) => {
  //       if (err) return res.json(Response(fail, '操作失败'));
  //       return res.json(Response(success, doc));
  //     })
  //   }
  // )
  // promise+链式
  // exampleSchemas
  //   .find()
  //   .or([{name: 'chen'}, {name: 'li'}])
  //   .nor([{name: 'zao'}])
  //   .and([{name: 'chen'}, {age: 28}])
  //   .where('age')
  //   .mod([2, 0])
  //   .gt(0)
  //   .gte(0)
  //   .lt(50)
  //   .lte(50)
  //   .ne(50)
  //   .where('name')
  //   .regex(/chen/)
  //   .in(['chen', 'zao'])
  //   .nin(['zao', 'sen'])
  //   .equals('chen')
  //   .populate('profile')
  //   .limit(2)
  //   .skip(1)
  //   .sort({age: -1})
  //   .select('name')
  //   .then((doc) => res.json(Response(success, doc)))
  //   .catch(() => res.json(Response(fail, '操作失败')));

  // // console.log(exampleSchemas.db);
  // // console.log(exampleSchemas.collection);
  // // console.log(exampleSchemas.modelName);
  // // console.log(exampleSchemas.baseModelName);
  // // console.log(exampleSchemas.model('example'));
  // // console.log(exampleSchemas.schema);
  // // console.log(exampleSchemas.base);
  // // console.log(exampleSchemas.discriminators);
  // console.log(exampleSchemas.discriminators);
  // console.log(exampleSchemas.discriminators);
  // console.log(exampleSchemas.discriminators);
  // console.log(exampleSchemas.discriminators);
  // res.end();
};

exports.put = async (req, res, next) => {
  // 需要获取数据的情况(方法一）
  // await kitten.findById(req.body.id, (err, doc) => {
  //   if (err) return next(err);
  //
  //   doc.set({name: doc.name + 1});
  //   doc.save((err, result) => {
  //     if (err) return next(err);
  //     res.send(result);
  //   })
  // });

  // 需要获取数据的情况(方法二)
  // kitten.findByIdAndUpdate(req.body.id, {$set: {name: req.body.phoneNumber}}, {new: true}, (err, result) => {
  //   if (err) next(err);
  //   return res.send(result);
  // })

  // 不需要获取数据的情况
  // kitten.update({_id: req.body.id}, {$set: {name: req.body.name}}, (err) => {
  //   if (err) next(err);
  //   return res.end();
  // })
  kitten.update({_id: req.body.id}).set({name: req.body.name}).exec((err, doc) => {
    if (err) next(err);
    res.send(doc);
  })
};

exports.delete = (req, res, next) => {
  kitten.remove({name: req.body.name}, (err, doc) => {
    if (err) next(err);
    res.send(doc);
  });
};
