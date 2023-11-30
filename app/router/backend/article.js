/*
 * @Author         : your name
 * @Date           : 2022-03-12 13:49:46
 * @LastEditTime   : 2022-04-03 20:50:15
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\article.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const   prefix = app.config.api_prefix.backend_prefix
 
    // app.resources(prefix+'model-name', '/api/model-name', app.controller.modelName);
    // app.resources("article",'/article',controller.article)

/**
 * @apiDefine MyError
 * @apiError  articleNotFound The <code>id</code> of the article was not found.
 */
 



    /**
 * @api {get} /article/all  文章列表
 * @apiGroup 文章模块
 *
 * @apiParam {Number} limit  每页条数.
 * @apiParam {Number} offset  起始偏移.
 *
 * @apiSuccess {Object[]} data  文章数据列表.
 * @apiSuccess {String } data.name  文章名字.
 * @apiSuccess {String } data.age   文章年龄.
 * @apiUse MyError
 */
    router.get(prefix+'/article/all', controller.article.index);

      /**
 * @api {get} /article/:id  获取文章详情
 * @apiGroup 文章模块
 *
 * @apiParam {Number} id  文章id.
 *

 */  
    router.get(prefix+'/article/info', controller.article.show);
     
    /**
 * @api {post} /article    创建文章
 * @apiGroup 文章模块
 *
 * @apiBody {String} [name]       文章名字
 * @apiBody {Number} [age]        文章年龄
 *
 */  
    router.post(prefix+'/article/create',    controller.article.create);
      /**
 * @api {post} /article/edit  修改文章信息
 * @apiGroup 文章模块
 *
 * @apiBody {Number} [id]   文章id.
 * @apiBody {String} [name]       文章名字
 * @apiBody {Number} [age]        文章年龄

 */  

    router.post(prefix+'/article/update', controller.article.update);
     
    /**
 * @api {post} /article/delete     删除文章
 * @apiGroup 文章模块
 *
 * @apiBody {Number} id  文章id.
 *
 */  

    router.post(prefix+'/article/delete', controller.article.destroy);
};

