/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-04 15:53:27
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\updateRecord.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("updateRecord",'/updateRecord',controller.updateRecord)

/**
 * @apiDefine MyError
 * @apiError  UserNotFound The <code>id</code> of the User was not found.
 */
 



    /**
 * @api {get} /updateRecord/all  更新记录列表
 * @apiGroup 更新记录模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  更新记录数据列表.
 * @apiSuccess {String } data.name  更新记录名字.
 * @apiSuccess {String } data.age   更新记录年龄.
 * @apiUse MyError
 */
    router.get(prefix+'/updateRecord/all', controller.updateRecord.index);

      /**
 * @api {get} /updateRecord/:id  获取更新记录详情
 * @apiGroup 更新记录模块
 *
 * @apiParam {Number} id  更新记录id.
 *

 */  
    router.get(prefix+'/updateRecord/info', controller.updateRecord.show);
     
    /**
 * @api {post} /updateRecord    创建更新记录
 * @apiGroup 更新记录模块
 *
 * @apiBody {String} [name]       更新记录名字
 * @apiBody {Number} [age]        更新记录年龄
 *
 */  
    router.post(prefix+'/updateRecord/create',    controller.updateRecord.create);
      /**
 * @api {post} /updateRecord/edit  修改更新记录 
 * @apiGroup 更新记录模块
 *
 * @apiBody {Number} [id]   更新记录id.
 * @apiBody {String} [name]       更新记录名字

 */  

    router.post(prefix+'/updateRecord/update', controller.updateRecord.update);
     
 

      /**
 * @api {post} /updateRecord/edit  禁用更新记录 
 * @apiGroup 更新记录 
 *
 * @apiBody {Number} [id]   更新记录id
 */  

       router.post(prefix+'/updateRecord/disable', controller.updateRecord.disable);


    /**
 * @api {post} /updateRecord/delete     删除更新记录 
 * @apiGroup 更新记录 
 *
 * @apiBody {Number} id  更新记录id
 *
 */  

     router.post(prefix+'/updateRecord/delete', controller.updateRecord.destroy);
    
};

