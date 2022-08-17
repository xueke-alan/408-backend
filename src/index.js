// 1.导入express
const express = require("express");
// 2.调用express
const app = express();

// 导入路由模块
const router = require('./router/Router')
app.use(router)


// 3。调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(8888, () => {
  console.log("http://127.0.0.1:8888");
});
