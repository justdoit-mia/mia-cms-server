/*
 * @Date           : 2022-04-06 11:12:53
 * @LastEditTime   : 2022-04-06 15:22:10
 * @Description    :  
 */
module.exports = (options, app) => {
    ////  console.log("中间件执行----加载");
    return async function (ctx, next) {

        ////  console.log("中间件执行");

    
        ////  console.log(ctx);
        
        await next();

        // let body = ctx.body;
        // if (!body) return;

      
        

    };
};