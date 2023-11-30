/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-06 14:53:50
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\faq.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("faq",'/faq',controller.faq)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /faq/all  问题列表
 * @apiGroup 问题模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  问题数据列表.
 * @apiSuccess {String } data.name  问题名字.
 * @apiSuccess {String } data.age   问题年龄.
 * @apiUse MyError
 */
    router.get(prefix+'/faq/all', controller.faq.index);

      /**
 * @api {get} /faq/:id  获取问题详情
 * @apiGroup 问题模块
 *
 * @apiParam {Number} id  问题id.
 *

 */  
    router.get(prefix+'/faq/info', controller.faq.show);
     
    /**
 * @api {post} /faq    创建问题
 * @apiGroup 问题模块
 *
 * @apiBody {String} [name]       问题名字
 * @apiBody {Number} [age]        问题年龄
 *
 */  
    router.post(prefix+'/faq/create',    controller.faq.create);
      /**
 * @api {post} /faq/edit  修改问题
 * @apiGroup 问题模块
 *
 * @apiBody {Number} [id]   问题id.
 * @apiBody {String} [name]       问题名字
 * @apiBody {Number} [age]        问题年龄

 */  

    router.post(prefix+'/faq/update', controller.faq.update);
     
 

      /**
 * @api {post} /faq/edit  禁用问题
 * @apiGroup 问题模块
 *
 * @apiBody {Number} [id]     问题id

 */  

       router.post(prefix+'/faq/disable', controller.faq.disable);


           /**
 * @api {post} /faq/delete     删除问题
 * @apiGroup 问题模块
 *
 * @apiBody {Number} id  问题id
 *
 */  

     router.post(prefix+'/faq/delete', controller.faq.destroy);

};

