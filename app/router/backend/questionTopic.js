/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-06 14:50:15
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \front-web-cms-server\app\router\questionTopic.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("questionTopic",'/questionTopic',controller.questionTopic)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /questionTopic/all  问题主题列表
 * @apiGroup 问题主题模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  问题主题数据列表.
 * @apiSuccess {String } data.name  问题主题.
 * @apiSuccess {String } data.age   问题主题.
 * @apiUse MyError
 */
    router.get(prefix+'/questionTopic/all', controller.questionTopic.index);

      /**
 * @api {get} /questionTopic/:id  获取问题主题详情
 * @apiGroup 问题主题模块
 *
 * @apiParam {Number} id  问题主题id.
 *

 */  
    router.get(prefix+'/questionTopic/info', controller.questionTopic.show);
     
    /**
 * @api {post} /questionTopic    创建问题主题
 * @apiGroup 问题主题模块
 *
 * @apiBody {String} [name]       问题主题
 * @apiBody {Number} [age]        问题主题
 *
 */  
    router.post(prefix+'/questionTopic/create',    controller.questionTopic.create);
      /**
 * @api {post} /questionTopic/edit  修改问题主题
 * @apiGroup 问题主题模块
 *
 * @apiBody {Number} [id]   问题主题id.
 * @apiBody {String} [name]       问题主题
 * @apiBody {Number} [age]        问题主题

 */  

    router.post(prefix+'/questionTopic/update', controller.questionTopic.update);
     
 

      /**
 * @api {post} /questionTopic/edit  禁用问题主题
 * @apiGroup 问题主题模块
 *
 * @apiBody {Number} [id]     问题主题id

 */  

       router.post(prefix+'/questionTopic/disable', controller.questionTopic.disable);


    /**
 * @api {post} /questionTopic/delete     删除问题主题
 * @apiGroup 问题主题模块
 *
 * @apiBody {Number} id  问题主题id
 *
 */  

     router.post(prefix+'/questionTopic/delete', controller.questionTopic.destroy);

};

