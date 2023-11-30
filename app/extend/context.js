/*
 * @Author         : your name
 * @Date           : 2022-03-12 18:06:38
 * @LastEditTime   : 2022-04-05 14:49:46
 * @LastEditors    : Please set LastEditors
 * @Description    : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath       : \jinnian-cms-server\app\extend\context.js
 */

module.exports = {
  /**
   * API 成功 返回体
   * @param {*} params
   */
  api_success(params) {
    let { code = "000000", msg = "success", data = "" } = params;
    this.status = 200;
    this.body = {
      code,
      msg,
      data,
      success: true,
    };
  },
  /**
   * API 成功 返回体
   * @param {*} params
   */
  api_success_data(data = "") {
    // console.log(' api_success_data(data = "")', data );
    this.api_success({ data });
  },

  /**
   * API 失败 返回体
   * @param {*} params
   */
  api_fail(params) {
    let { code = "999999", msg = "fail", data = "" } = params;
    this.status = 200;
    this.body = {
      code,
      msg,
      data,
      success: false,
    };
  },
  /**
   * API 失败 返回体
   * @param {*} params
   */
  api_fail_msg(msg = "fail") {
    this.api_fail({ msg });
  },
 
  /**
   * API 错误 返回体
   * @param {*} params
   */
   api_error_msg(msg = "error") {
    this.api_fail({ msg });
  },
  /**
   * 转数字
   * @param {*} str 
   * @returns 
   */
  toInt(str) {
    if (typeof str === "number") return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
  /**
   * 等待 
   * @param {*} ms 
   * @returns 
   */
  
  
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },
  /**
   *
   * @param {*} obj  需要 移除假值的对象
   * @param {*} exclude_keys   不参与计算的key ， 如果这些key 对应假值 将保留
   */
   remove_false_key(obj = {}, exclude_keys = []) {
    for (let i in obj) {
      if (!exclude_keys.includes(i) && !obj[i]) {
        delete obj[i];
      }
    }
  },


};
