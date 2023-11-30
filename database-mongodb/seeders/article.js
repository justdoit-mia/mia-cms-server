/*
 * @Date           : 2022-04-03 20:56:47
 * @LastEditTime   : 2022-04-03 20:56:47
 * @Description    :  
 */

const mongoose = require("mongoose");
var randomstring = require("randomstring");
var mongodb_connect_fn = require("../mongodb.config");
var model_builder_fn = require("../../app/model/article");
async function main() {
  await mongodb_connect_fn();
  const  Model = model_builder_fn({ mongoose });
  let data = [];
 
       //类型   1 momentArticle  时刻文章 
   
   let type1_demo={
    author:'101',
  type:1,
  assistant:[1],
  topic:[1],
  status:-1,
  is_top:false,
  is_best:false,
  moment_content: ' 时刻文章内容----'+ randomstring.generate(120),
  moment_images:[
    "/public/upload/image/demo/1.jpeg",
    "/public/upload/image/demo/2.jpeg",
    "/public/upload/image/demo/3.jpeg",
    "/public/upload/image/demo/4.jpeg",
    "/public/upload/image/demo/5.jpeg",
    "/public/upload/image/demo/6.jpeg",
  ]

}
   // 2 videoArticle   视频文章 
let type2_demo={
  author:'102',
type:2,
assistant:[1],
topic:[1],
status:-1,
is_top:false,
is_best:false,
video_src:"/public/upload/video/demo/1.mp4",
video_content: ' 视频文章内容----'+ randomstring.generate(120),


}


//   3   commonArticle 常规文章
let type3_demo={
  author:'103',
type:3,
assistant:[1],
topic:[1],
status:-1,
is_top:false,
is_best:false,
common_title:"常规文章标题",
common_content: ' 常规文章内容----'+ randomstring.generate(120),


}
   
       data.push(type1_demo);
       data.push(type2_demo);
       data.push(type3_demo);
 
  await  Model.create(data);
  console.log("执行完毕");
  process.exit(0);
}
main().catch((err) => console.log(err));
