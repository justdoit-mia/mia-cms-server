/*
 * @Date           : 2022-03-13 23:48:39
 * @LastEditTime   : 2022-03-29 18:37:31
 * @Description    :  
 */



const mongoose = require("mongoose");
var randomstring = require("randomstring");
var mongodb_connect_fn = require("../mongodb.config");
var model_builder_fn = require("../../app/model/assistant");
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
    "坦克小锦鲤",
    "坦小姐",
    "售后坦师傅",
    "坦克通讯员"
 
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
