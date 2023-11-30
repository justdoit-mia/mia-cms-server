/*
 * @Date           : 2022-03-29 20:57:44
 * @LastEditTime   : 2022-04-06 21:33:33
 * @Description    :
 */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
 

module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1645787157801_459";

  // add your middleware config here
  // config.middleware = ["jwterr"];
  config.jwterr = {
    enable: true,
    match: /^((?!login).)*$/,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // 洋葱模型   中间件  数据 方向：   左边第一个 中间件 流入 到最右边最后一个中间件 执行完 next 执行核心事务，然后从 最右边最后一个中间件 原路返回 到最左边第一个中间件 ，数据流出返回给客户端
    middleware: ["errorHandler","jwterr",'cost','auth',]
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // myAppName: 'egg',
    // domainWhiteList: ['http://localhost:8080'],//允许访问接口的白名单
  };

  config.mongoose = {
    client: {
      url: "mongodb://localhost:27017/mia_cms", //   collection(数据库)名称
      options: {}, // 其他配置项
      // mongoose global plugins, expected a function or an array of function and options
      plugins: [],
    },
  };

  // mysql 和 MongoDB 在一个项目内 不兼容
  //

  // egg-sequelize  数据库配置
  // config.sequelize ={
  //   dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '123456',
  //   database: 'cms_dev_1',
  //   // connectionUri: 'mysql://root:@127.0.0.1:3306/test',
  //   // delegate: 'model', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  //   // baseDir: 'model', // load all files in `app/${baseDir}` as models, default to `model`
  //   // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  //   // more sequelize options
  //   // benchmark: true,
  //   // logging(...args) {
  //   //   // if benchmark enabled, log used
  //   //   const used = typeof args[1] === 'number' ? `[${args[1]}ms]` : '';
  //   //   app.logger.info('[egg-sequelize]%s %s', used, args[0]);
  //   // },
  //   define: {
  //     freezeTableName: true,
  //     underscored: true,
  //   },

  // };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  config.multipart = {
    mode: "file",
    // mode: 'stream',
    // let POST /upload
    allowArrayField: true,
  };

  config.session = {
    maxAge: 24 * 3600 * 1000, // ms
    key: "EGG_SESS",
    httpOnly: true,
    encrypt: true,
    // sameSite: null,
    logValue: true,
  };
  // jwt.sign(payload, secretOrPrivateKey, [options, callback])
  config.jwt = {
    secret: "jinnian668899",
    enable: false,
     match: /^((?!login).)*$/,
     expiresIn:"12h"
   
    // https://zhuanlan.zhihu.com/p/42930189
  };
  config.api_prefix = {
    backend_prefix: "/backend",
    client_prefix: "/client",
  };

  // 文件上传目录
  config.upload_dir = "app/public/upload/";







config. onerror= {
  all(err, ctx) {
    console.log( 'err-------------------');
    console.log( err);
    // 在此处定义针对所有响应类型的错误处理方法
    // 注意，定义了 config.all 之后，其他错误处理方法不会再生效

 

   if(err.status==401){
     console.log('err.status==401');
     ctx.status = 200;
 
     ctx.set('content-type', "application/json; charset=utf-8") 
     ctx.body = JSON.stringify({
      code:401,
      msg:"请先登录"
    })
  
   }else{
    ctx.status = 200;
 
    ctx.set('content-type', "application/json; charset=utf-8") 
    ctx.body = JSON.stringify({
     code:500,
     msg: "服务器异常"
   })
   }

  },
  // html(err, ctx) {
  //   // html hander
  //   ctx.body = '<h3>error-ssssssssssssssssssssssss</h3>';
  //   ctx.status = 500;
  // },
  // json(err, ctx) {
  //   // json hander
  //   ctx.body = { message: 'error' };
  //   ctx.status = 500;
  // },
  // jsonp(err, ctx) {
  //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
  // },
};








  return {
    ...config,
    ...userConfig,
  };
};
