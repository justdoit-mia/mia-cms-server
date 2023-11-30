'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommoditySchema = new Schema({
    // 设计文档字段
    name: { type: String },
    info: { type: String },
    detal: { type: String },
    price: {type: Number}
  });
  // 表名 设计类型
  return mongoose.model('CommodityInfo', CommoditySchema, 'commodity');
};