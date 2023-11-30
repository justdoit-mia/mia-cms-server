/*
 * @Author         : Rank
 * @Date           : 2022-02-26 10:53:38
 * @Description    :
 * @FilePath       : /node/app/service/mongo.js
 */
'use strict';

const Service = require('egg').Service;
class MongoService extends Service {
  async addUserInfo(query) {
    // model:      在设计模块时创建文件夹的名字
    // UserInfo:   在设计模块时创建的js文件的名字
    // 注意，当你文件名字为小写时候userInfo，在调用的时候必须调用首字母大写UserInfo
    // const result = await this.ctx.model.UserInfo.insertMany(query); // 插入多条文档
    const result = await this.ctx.model.UserInfo.create(query); // 插入一条
    // const result = await this.ctx.model.UserInfo.updateOne(query); // 删除一条文档

    // 修改一条文档
    // {$gt操作符查看](https://www.mongodb.org.cn/manual/query-evaluation/)
    // const result = await this.ctx.model.UserInfo.updateOne({age: {$gt: 18}}, { isAdult: true });
    // 查询满足条件所有文档
    // const result = await this.ctx.model.UserInfo.find(query);
    return result;
  }
  async delUserInfo(query) {
    // model:      在设计模块时创建文件夹的名字
    // UserInfo:   在设计模块时创建的js文件的名字
    // 注意，当你文件名字为小写时候userInfo，在调用的时候必须调用首字母大写UserInfo
    // const result = await this.ctx.model.UserInfo.insertMany(query); // 插入多条文档
    const result = await this.ctx.model.UserInfo.remove(query); // 插入一条
    // const result = await this.ctx.model.UserInfo.updateOne(query); // 删除一条文档

    // 修改一条文档
    // {$gt操作符查看](https://www.mongodb.org.cn/manual/query-evaluation/)
    // const result = await this.ctx.model.UserInfo.updateOne({age: {$gt: 18}}, { isAdult: true });
    // 查询满足条件所有文档
    // const result = await this.ctx.model.UserInfo.find(query);
    return result;
  }
  async getUserInfo(query) {
    // model:      在设计模块时创建文件夹的名字
    // UserInfo:   在设计模块时创建的js文件的名字
    // 注意，当你文件名字为小写时候userInfo，在调用的时候必须调用首字母大写UserInfo
    // const result = await this.ctx.model.UserInfo.insertMany(query); // 插入多条文档
    // const result = await this.ctx.model.UserInfo.remove(query); // 插入一条
    // const result = await this.ctx.model.UserInfo.updateOne(query); // 删除一条文档

    // 修改一条文档
    // {$gt操作符查看](https://www.mongodb.org.cn/manual/query-evaluation/)
    // const result = await this.ctx.model.UserInfo.updateOne({age: {$gt: 18}}, { isAdult: true });
    // 查询满足条件所有文档
    const result = await this.ctx.model.UserInfo.find(query);
    return result;
  }
  async modifyUserInfo(query) {
    // model:      在设计模块时创建文件夹的名字
    // UserInfo:   在设计模块时创建的js文件的名字
    // 注意，当你文件名字为小写时候userInfo，在调用的时候必须调用首字母大写UserInfo
    // const result = await this.ctx.model.UserInfo.insertMany(query); // 插入多条文档
    // const result = await this.ctx.model.UserInfo.remove(query); // 插入一条
    // const result = await this.ctx.model.UserInfo.updateOne(query); // 删除一条文档

    // 修改一条文档
    // {$gt操作符查看](https://www.mongodb.org.cn/manual/query-evaluation/)
    const result = await this.ctx.model.UserInfo.updateOne({ userName: query.userName }, { $set: {
      password: query.password,
      remark: query.remark,
    } });
    // 查询满足条件所有文档
    // const result = await this.ctx.model.UserInfo.find(query);
    return result;
  }

}
module.exports = MongoService;
