/*
 * @Date           : 2022-03-28 14:51:16
 * @LastEditTime   : 2022-04-06 13:17:55
 * @Description    :
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, middleware } = app;

  router.get("/", controller.home.index);
 //后台接口
  // require('./router/backend/user_info')(app);
  //管理员登录
  require("./router/backend/admin")(app);

  //用户管理
  require("./router/backend/user")(app);
  //常见问题管理
  require("./router/backend/faq")(app);
  //问题主题
  require("./router/backend/questionTopic")(app);
  //文章主题
  require("./router/backend/articleTopic")(app);
  //官方助手
  require("./router/backend/assistant")(app);

  //文章管理
  require("./router/backend/article")(app);
  //更新记录
  require("./router/backend/updateRecord")(app);
  //文件上传
  require("./router/common/file")(app);

  //客户端

  //客户端

  require("./router/client/all")(app);
};
