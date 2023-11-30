/*
 * @Author         : Rank
 * @Date           : 2022-02-26 10:53:14
 * @Description    :
 * @FilePath       : /node/app/controller/mongo.js
 */
'use strict';
const Controller = require('egg').Controller;
class MongoController extends Controller {
  async addUserInfo() {
    // 假设请求的参数为{username: 'jack', userpassword: '123456'}
    try {
      const query = this.ctx.request.body;
      const createRule = {
        userName: { type: 'string' },
        password: { type: 'string' },
        remark: { type: 'string' },
      };
      this.ctx.validate(createRule);
      const r = await this.ctx.service.mongo.addUserInfo(query);
      this.ctx.body = { success: true, msg: r.msg };
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.status = 503;
      this.ctx.body = { success: false, msg: err.errors };
      return;
    }
  }
  async delUserInfo() {
    // 假设请求的参数为{username: 'jack', userpassword: '123456'}
    try {
      const query = this.ctx.request.body;
      const createRule = {
        userName: { type: 'string' },
      };
      this.ctx.validate(createRule);
      const r = await this.ctx.service.mongo.delUserInfo(query);
      this.ctx.body = { success: true, msg: r.msg };
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.status = 503;
      this.ctx.body = { success: false, msg: err.errors };
      return;
    }
  }
  async getUserInfo() {
    // 假设请求的参数为{username: 'jack', userpassword: '123456'}
    try {
      const query = this.ctx.request.body;
      const r = await this.ctx.service.mongo.getUserInfo(query);
      this.ctx.body = { success: true, data: r };
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.status = 503;
      this.ctx.body = { success: false, msg: err.errors };
      return;
    }
  }
  async modifyUserInfo() {
    // 假设请求的参数为{username: 'jack', userpassword: '123456'}
    try {
      const query = this.ctx.request.body;
      const r = await this.ctx.service.mongo.modifyUserInfo(query);
      console.warn(r);
      this.ctx.body = { success: true, msg: r };
    } catch (err) {
      this.ctx.logger.warn(err.errors);
      this.ctx.status = 503;
      this.ctx.body = { success: false, msg: err.errors };
      return;
    }
  }
}
module.exports = MongoController;
