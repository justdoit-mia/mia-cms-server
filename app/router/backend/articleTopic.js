/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-06 14:50:15
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \front-web-cms-server\app\router\articleTopic.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("articleTopic",'/articleTopic',controller.articleTopic)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /articleTopic/all  话题主题列表
 * @apiGroup 话题主题模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  话题主题数据列表.
 * @apiSuccess {String } data.name  话题主题.
 * @apiSuccess {String } data.age   话题主题.
 * @apiUse MyError
 */
    router.get(prefix+'/articleTopic/all', controller.articleTopic.index);

      /**
 * @api {get} /articleTopic/:id  获取话题主题详情
 * @apiGroup 话题主题模块
 *
 * @apiParam {Number} id  话题主题id.
 *

 */  
    router.get(prefix+'/articleTopic/info', controller.articleTopic.show);
     
    /**
 * @api {post} /articleTopic    创建话题主题
 * @apiGroup 话题主题模块
 *
 * @apiBody {String} [name]       话题主题
 * @apiBody {Number} [age]        话题主题
 *
 */  
    router.post(prefix+'/articleTopic/create',    controller.articleTopic.create);
      /**
 * @api {post} /articleTopic/edit  修改话题主题
 * @apiGroup 话题主题模块
 *
 * @apiBody {Number} [id]   话题主题id.
 * @apiBody {String} [name]       话题主题
 * @apiBody {Number} [age]        话题主题

 */  

    router.post(prefix+'/articleTopic/update', controller.articleTopic.update);
     
 

      /**
 * @api {post} /articleTopic/edit  禁用话题主题
 * @apiGroup 话题主题模块
 *
 * @apiBody {Number} [id]     话题主题id

 */  

       router.post(prefix+'/articleTopic/disable', controller.articleTopic.disable);


    /**
 * @api {post} /articleTopic/delete     删除话题主题
 * @apiGroup 话题主题模块
 *
 * @apiBody {Number} id  话题主题id
 *
 */  

     router.post(prefix+'/articleTopic/delete', controller.articleTopic.destroy);

};

