/*
 * @Date           : 2022-03-29 21:41:11
 * @LastEditTime   : 2022-04-03 16:09:43
 * @Description    :
 */
"use strict";
const pump = require("pump");
const Controller = require("egg").Controller;
const fsPromises = require("fs/promises");
class FileUploadController extends Controller {
  // https://github.com/eggjs/egg-multipart#upload-multiple-files
  /**
   * 保存图片
   */
  // async save() {
  //     const ctx = this.ctx;
  //     try {
  //         console.log('保存图片-----',ctx.request);
  //         console.log('保存图片-----1', 666);
  //         console.log('保存图片----files-', );
  //         console.log('got %d files', ctx.request.files.length);
  //         const parts = ctx.multipart({ autoFields: true });
  //         let files ={};
  //         let part ;
  //         while ((part  = await parts()) != null) {
  //             console.log('field: ' + part[0]);
  //             console.log('value: ' + part[1]);
  //             console.log('valueTruncated: ' + part[2]);
  //             console.log('fieldnameTruncated: ' + part[3]);
  //             console.log('field: ' + part.fieldname);
  //             console.log('filename: ' + part.filename);
  //             console.log('encoding: ' + part.encoding);
  //             console.log('mime: ' + part.mime);
  //             if(!part .filename){
  //                 continue;
  //             }
  //             const fieldname = part .fieldname; // file表单的名字
  //             // 上传图片的目录
  //             const dir = await this.service.fileUpload.getUploadFile(part .filename,'image');
  //             const target = dir.filepath;
  //             const writeStream = fs.createWriteStream(target);
  //             await pump(part , writeStream);
  //             writeStream.destroy();
  //             files = Object.assign(files, {
  //               [fieldname]: dir.save_dir
  //             });
  //             // if (part.length) {
  //             //     // arrays are busboy fields
  //             //     console.log('field: ' + part[0]);
  //             //     console.log('value: ' + part[1]);
  //             //     console.log('valueTruncated: ' + part[2]);
  //             //     console.log('fieldnameTruncated: ' + part[3]);
  //             //   } else {
  //             //     if (!part.filename) {
  //             //       // user click `upload` before choose a file,
  //             //       // `part` will be file stream, but `part.filename` is empty
  //             //       // must handler this, such as log error.
  //             //       continue;
  //             //     }
  //             //     // otherwise, it's a stream
  //             //     console.log('field: ' + part.fieldname);
  //             //     console.log('filename: ' + part.filename);
  //             //     console.log('encoding: ' + part.encoding);
  //             //     console.log('mime: ' + part.mime);
  //             //     const result = await ctx.oss.put('egg-multipart-test/' + part.filename, part);
  //             //     console.log(result);
  //             //   }
  //           }
  //           if(Object.keys(files).length > 0){
  //             ctx.api_success_data(files);
  //           }else{
  //             ctx.api_error_msg(error);
  //           }
  //       ctx.api_success_data(result);
  //     } catch (error) {
  //       ctx.api_error_msg(error);
  //     }
  //   }
  /**
   *
   * 转化 文件类型到 自定义的  type
   *
   */
  compute_type_by_file_mimeType(mimeType = "") {
    let str = "";
    if (mimeType.includes("image")) {
      str = "image";
    } else if (mimeType.includes("video")) {
      str = "video";
    } else {
      str = "other";
    }
    return str;
  }
  /**
   * 上传文件内部方法
   *
   */
  async save_file() {
    const ctx = this.ctx;
    console.log("保存图片-----", ctx.request.body);
    console.log("保存图片-----1", 666);
    console.log("保存图片----files-");
    let files = ctx.request.files;
    let other = ctx.request.body.other;
    console.log("got %d files", files.length);
    console.log("files---");
    let result = {
      success: "",
      data: {},
    };
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log("file-----", file);
        console.log("field: " + file.fieldname);
        console.log("filename: " + file.filename);
        console.log("encoding: " + file.encoding);
        console.log("mime: " + file.mime);
        console.log("tmp filepath: " + file.filepath);
        // field: 'files',
        // filename: '11111111111111.png',
        // encoding: '7bit',
        // mime: 'image/png',
        // fieldname: 'files',
        // transferEncoding: '7bit',
        // mimeType: 'image/png',
        // filepath: 'C:\\Users\\admin\\AppData\\Local\\Temp\\egg-multipart-tmp\\jinnian-cms-server\\2022\\04\\03\\12\\d5002e4c-d71a-4332-aa30-b030940505e7.png'
        try {
          // process file or upload to cloud storage
          // 文件名字
          const filename = file.filename;
          // 转换类型
          const type = this.compute_type_by_file_mimeType(file.mimeType);
          // 上传图片的目录
          const save_target = await this.service.fileUpload.getUploadFile(
            filename,
            type
          );
          console.log("计算后的存放路径---- ", save_target);
          const oldPath = file.filepath;
          const newPath = save_target.filepath;
          await fsPromises.copyFile(oldPath, newPath);
      
          result["data"][filename] = save_target.save_dir;
        } finally {
          // remove tmp files and don't block the request's response
          // cleanupRequestFiles won't throw error even remove file io error happen
          ctx.cleanupRequestFiles([file]);
        }
      }
      result.success = true;
    } catch (error) {
      result.success = false;
      result.msg = error;
    }
    console.log(result);
    return result;
  }
  // https://github.com/eggjs/egg-multipart#upload-multiple-files
  /**
   * 保存 文件 
   */
  async save() {
    const ctx = this.ctx;
    const result = await this.save_file();
    if (result.success) {
      ctx.api_success_data(result.data);
    } else {
      ctx.api_error_msg(result.msg);
    }
  }
}
module.exports = FileUploadController;
