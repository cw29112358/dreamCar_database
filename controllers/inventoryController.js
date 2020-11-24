const cars = require('../modal/cars');
const Response = require('../utils/response');
const success = 'success';
const fail = 'fail';

exports.loadInventory = async (req, res) => {
  const inventoryCars = await cars.find({});
  return res.json(Response(success, inventoryCars))
}

exports.getSingleCar = async (req, res) => {
  const { id } = req.params;
  const singleCar = await cars.findOne({ _id: id });
  return res.json(Response(success, singleCar));
}

exports.updateFavouriteCar = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  // 找到所有库存车
  const allCars = await cars.find({});

  // 更新当前车辆的收藏字段
  cars.findByIdAndUpdate(id, {$set: { isFavorite: !favorite }}, { new: true }, (err, result) => {
    if (err) return res.json(Response(fail, '收藏失败'));

    // 返给前端当前车辆信息和所有库存车，让前端去开发收藏车的逻辑
    return res.json(Response(success, [result, allCars]));
  })
}

exports.updateFavouriteCars = (req, res) => {
  cars.updateMany({ isFavorite: true}, { isFavorite: false }, (err) => {
    if (err) return res.json(Response(fail, '取消收藏失败'));
    return res.json(Response(success, '取消收藏成功'));
  })
}
