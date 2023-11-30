/*
 * @Date           : 2022-03-29 22:13:20
 * @LastEditTime   : 2022-04-06 11:04:56
 * @Description    :  
 */
module.exports = (app) =>{

    const { router, controller } = app;
    const   prefix = app.config.api_prefix.backend_prefix
          /**
 * @api {post}  /file/upload   文件上传
 * @apiGroup    文件模块
 *
 */  
    router.post(prefix+'/file/upload', controller.fileUpload.save);
}