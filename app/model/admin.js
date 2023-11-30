
/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/admin/user.js
 * @Description    : 管理员 模型
 */

module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const schema_instance = new Schema({
      name: { type: String },
      password: { type: String },
      last_sign_in_at: {
        type: Date,
      },
      created_at: {
        type: Date,
      },
      updated_at: {
        type: Date,
      },
    });
    schema_instance.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
 
      return object;
    });
    return mongoose.model("Admin", schema_instance);
  };
  