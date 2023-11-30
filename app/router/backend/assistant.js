/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-06 14:50:15
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \front-web-cms-server\app\router\assistant.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("assistant",'/assistant',controller.assistant)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /assistant/all  官方助手列表
 * @apiGroup 官方助手模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  官方助手数据列表.
 * @apiSuccess {String } data.name  官方助手.
 * @apiSuccess {String } data.age   官方助手.
 * @apiUse MyError
 */
    router.get(prefix+'/assistant/all', controller.assistant.index);

      /**
 * @api {get} /assistant/:id  获取官方助手详情
 * @apiGroup 官方助手模块
 *
 * @apiParam {Number} id  官方助手id.
 *

 */  
    router.get(prefix+'/assistant/info', controller.assistant.show);
     
    /**
 * @api {post} /assistant    创建官方助手
 * @apiGroup 官方助手模块
 *
 * @apiBody {String} [name]       官方助手
 * @apiBody {Number} [age]        官方助手
 *
 */  
    router.post(prefix+'/assistant/create',    controller.assistant.create);
      /**
 * @api {post} /assistant/edit  修改官方助手
 * @apiGroup 官方助手模块
 *
 * @apiBody {Number} [id]   官方助手id.
 * @apiBody {String} [name]       官方助手
 * @apiBody {Number} [age]        官方助手

 */  

    router.post(prefix+'/assistant/update', controller.assistant.update);
     
 

      /**
 * @api {post} /assistant/edit  禁用官方助手
 * @apiGroup 官方助手模块
 *
 * @apiBody {Number} [id]     官方助手id

 */  

       router.post(prefix+'/assistant/disable', controller.assistant.disable);


    /**
 * @api {post} /assistant/delete     删除官方助手
 * @apiGroup 官方助手模块
 *
 * @apiBody {Number} id  官方助手id
 *
 */  

     router.post(prefix+'/assistant/delete', controller.assistant.destroy);

};

