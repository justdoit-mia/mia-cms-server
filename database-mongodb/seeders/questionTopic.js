/*
 * @Date           : 2022-04-04 16:53:26
 * @LastEditTime   : 2022-04-05 17:08:46
 * @Description    :  
 */
const mongoose = require("mongoose");
var randomstring = require("randomstring");
var mongodb_connect_fn = require("../mongodb.config");
var model_builder_fn = require("../../app/model/questionTopic");
async function main() {
  await mongodb_connect_fn();
  const  Model = model_builder_fn({ mongoose });
  let data = [];
  // for (let index = 0; index < 50; index++) {
  //   data.push({
  //     name: randomstring.generate(15),
  //     password: randomstring.generate(15),
  //     age: parseInt(Math.random() * 100),
  //   });
  // }

  [
    "发视频",
    "发文章",
    "发动态",
    "订单",
    "链接",
    "新车",
    "售后",
    "退款"
 
  ].map((x,i)=>{
    data.push({
      name_zn:x,
      name_en:x,
      sid:i+1
    })
  })
  await  Model.create(data);
  console.log("执行完毕");
  process.exit(0);
}
main().catch((err) => console.log(err));
