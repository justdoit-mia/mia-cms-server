/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-06 10:59:26
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\user.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;

 
  const   prefix = app.config.api_prefix.backend_prefix
 
  
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("user",'/user',controller.user)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /user/all  用户列表
 * @apiGroup 用户模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  用户数据列表.
 * @apiSuccess {String } data.name  用户名字.
 * @apiSuccess {String } data.age   用户年龄.
 * @apiUse MyError
 */
    router.get(prefix+'/user/all', controller.user.index);

      /**
 * @api {get} /user/:id  获取用户详情
 * @apiGroup 用户模块
 *
 * @apiParam {Number} id  用户id.
 *

 */  
    router.get(prefix+'/user/info', controller.user.show);
     
    /**
 * @api {post} /user    创建用户
 * @apiGroup 用户模块
 *
 * @apiBody {String} [name]       用户名字
 * @apiBody {Number} [age]        用户年龄
 *
 */  
    router.post(prefix+'/user/create',    controller.user.create);
      /**
 * @api {post} /user/edit  修改用户信息
 * @apiGroup 用户模块
 *
 * @apiBody {Number} [id]   用户id.
 * @apiBody {String} [name]       用户名字
 * @apiBody {Number} [age]        用户年龄

 */  

    router.post(prefix+'/user/update', controller.user.update);
     
    /**
 * @api {post} /user/delete     删除用户
 * @apiGroup 用户模块
 *
 * @apiBody {Number} id  用户id.
 *
 */  

    router.post(prefix+'/user/delete', controller.user.destroy);
};

