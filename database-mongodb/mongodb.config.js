/*
 * @Date           : 2022-03-13 23:49:06
 * @LastEditTime   : 2022-04-04 16:02:01
 * @Description    :  
 */


const mongoose = require('mongoose');

const   mongodb_url =   'mongodb://localhost:27017/mia_cms'
module.exports = async ()=>{
        
  await mongoose.connect(mongodb_url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}

