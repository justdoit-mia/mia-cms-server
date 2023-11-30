/*
 * @Date           : 2022-04-04 16:53:26
 * @LastEditTime   : 2022-04-05 17:08:46
 * @Description    :  
 */
const mongoose = require("mongoose");
var randomstring = require("randomstring");
var mongodb_connect_fn = require("../mongodb.config");
var model_builder_fn = require("../../app/model/articleTopic");
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
    "坦克300",
    "坦克500",
    "坦克露营正当时",
    "无痕露营倡议",
    "露营好地分享",
    "我的路书",
    "越野教程",
    "坦克开箱记",
    "带坦克回家的第X天",
    "车模收藏"
 
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
