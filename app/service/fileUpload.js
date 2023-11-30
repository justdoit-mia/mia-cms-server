/*
 * @Date           : 2022-04-03 13:35:21
 * @LastEditTime   : 2022-04-03 14:22:44
 * @Description    :  
 */
'use strict';

const Service = require('egg').Service;

const { mkdir } = require('fs/promises');
const moment  = require("moment");
const path = require('path');

const uuid  = require("uuid").v1

class FileUploadService extends Service {
        /**
   *  获取文件 上传目录
   * @returns 
   */
    
        async getUploadFile(filename,type='other'){

       //获取当前日期
       let day = moment().format( "YYYYMMDD" );
       console.log(day);
       // 基础配置
       let basedir =   this.config.upload_dir+type;

       //创建 文件的保存路径 
       let dir = path.join(basedir,day);
       //不存在就创建目录
        await mkdir(dir, { recursive: true });
       //生成uuid 文件名字
       let uid = uuid().replace(/-/ig,'');
       //完整路径
       let filepath = path.join( dir,uid+path.extname(filename));

       return{
         //完整路径
        filepath,
        // 保存目录  : this.ctx.origin + uploadDir.slice(3).replace(/\\/g, '/')
        save_dir:   filepath.slice(3).replace(/\\/g, '/')

       }

        }

 

  

}

module.exports = FileUploadService;
