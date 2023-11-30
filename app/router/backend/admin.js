/*
 * @Author         : your name
 * @Date           : 2022-03-11 23:43:32
 * @LastEditTime   : 2022-03-12 15:09:30
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\router\admin.js
 */
module.exports = (app) =>{

    const { router, controller } = app;
    const   prefix = app.config.api_prefix.backend_prefix
 
          /**
 * @api {post}  /admin/login   登录
 * @apiGroup 管理员模块
 *
 * @apiBody {String} [name]           管理员名字
 * @apiBody {Number} [password]         管理员密码

 */  
    router.post(prefix+'/admin/login', controller.admin.login);
}