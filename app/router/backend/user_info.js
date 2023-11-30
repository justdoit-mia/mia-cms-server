/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:48:59
 * @LastEditTime   : 2022-03-12 13:51:48
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\user_info.js
 */



'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
  router.post(prefix+'UserInfo/addUserInfo', controller.mongo.addUserInfo);
  router.post(prefix+'UserInfo/delUserInfo', controller.mongo.delUserInfo);
  router.post(prefix+'UserInfo/getUserInfo', controller.mongo.getUserInfo);
  router.post(prefix+'UserInfo/modifyUserInfo', controller.mongo.modifyUserInfo);
  // ---------
  router.get(prefix+'UserInfo/addCommodity', controller.commodity.addCommodity);
  router.post(prefix+'UserInfo/queryCommodity', controller.commodity.queryCommodity);
 
};

