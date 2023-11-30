/*
 * @Date           : 2022-04-06 15:17:14
 * @LastEditTime   : 2022-04-06 20:00:29
 * @Description    :  
 */
"use strict";

const Controller = require("egg").Controller;

class AdminController extends Controller {
  /**
   * 管理员登录
   */
  async login() {
    const { ctx } = this;
 

    try {
      const { name, password } = ctx.request.body;
      const result = await ctx.model.Admin.findOne({
        name: name,
        password: password,
      }).exec();



      console.log("登录  后台管理登录", );

      if(result){
        console.log(result);
        //生成 token 的方式
        const token = await  this.service.jwt.createToken({
          id:result.id,
          is_admin:true
        })

        console.log('token---',token);


        ctx.api_success_data(token);
      } else {
        ctx.api_error_msg("后台管理 不存在");
      }



 
    } catch (error) {
      ctx.api_error_msg(error);
    }

 
  }
}

module.exports = AdminController;
