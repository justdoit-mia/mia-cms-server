'use strict';
const Controller = require('egg').Controller;
class CommodityController extends Controller {
  // 添加
  async addCommodity() {
    const {ctx, service} = this
    // get参数获取
    let { query } = ctx
    const addContent = await service.commodity.addCommodity(query)
    ctx.body = addContent
  }
  // 查询
  async queryCommodity() {
    const {ctx, service} = this
    // post参数获取
    let { body } = ctx.request
    const queryCommodity = await service.commodity.queryCommodity(body)
    ctx.body = queryCommodity
  }
  // async updateCommodity() {
  //   const {ctx, service} = this
  //   let { query } = ctx
  //   const updateCommodity = await service.commodity.updateCommodity(query)
  //   ctx.body = updateCommodity
  // }

}
module.exports = CommodityController;