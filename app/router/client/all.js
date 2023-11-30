/*
 * @Date           : 2022-04-05 21:56:33
 * @LastEditTime   : 2022-04-06 16:17:28
 * @Description    :
 */

"use strict";

module.exports = (app) => {
  const { router, controller, jwt } = app;
  const prefix = app.config.api_prefix.client_prefix;

  // app.resources('model-name', '/api/model-name', app.controller.modelName);
  // app.resources("user",'/user',controller.user)

  /**
   * @api {post} /login  用户登录
   * @apiGroup  客户端接口
   *
   */
  router.post(prefix + "/login", controller.user.login);

  /**
   * @api {get} /login  获取常见问题列表
   * @apiGroup  客户端接口
   *
   */
  router.get(prefix + "/faq/all", controller.faq.index);

  /**
   * @api {get} /login  获取常见问题详情
   * @apiGroup  客户端接口
   *
   */
  router.get(prefix + "/faq/info", controller.faq.show);

  /**
   * @api {get} /login  获取常见问题列表
   * @apiGroup  客户端接口
   *
   */
  router.get(prefix + "/updateRecord/all", controller.faq.index);

  /**
   * @api {get} /login  获取常见问题详情
   * @apiGroup  客户端接口
   *
   */
  router.get(prefix + "/updateRecord/info", controller.faq.show);
};
