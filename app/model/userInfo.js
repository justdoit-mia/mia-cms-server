/*
 * @Author         : Rank
 * @Date           : 2022-02-26 10:51:22
 * @Description    :
 * @FilePath       : /node/app/model/userInfo.js
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    // 设计文档字段
    userName: { type: String },
    password: { type: String },
    remark: { type: String },
  });
  // 第一个参数是跟 model 对应的集合（ collection ）名字的 单数 形式。
  // Mongoose 会自动找到名称是 model 名字 复数 形式的 collection
  // .model() 这个函数是对 schema 做了拷贝（生成了 model）。
  // 要确保在调用 .model() 之前把所有需要的东西都加进 schema 里了
  // 相当于sql的设计表的字段
  // 第三个参数就是集合(数据表)的名字,如果省略mongoose会自动找到UserInfos
  return mongoose.model('UserInfo', userSchema, 'user');
};
// 当配置了多个数据库的时候，那么就需要先连接对应的数据库
// module.exports = app => {
//   const mongoose = app.mongoose;
//   // 连接数据库
//   const connect = app.mongooseDB.get('db1'); // config配置的数据库别名
//   const UserSchema = new mongoose.Schema({
//     username: { type: String },
//     userpassword: { type: String },
//   });
//   // 返回的时候使用connect调用model
//   return connect.model('User', UserSchema);
// };
