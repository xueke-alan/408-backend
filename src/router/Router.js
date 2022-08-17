// 导入express
const express = require("express");
// 创建路由对象
const router = express.Router();



// 挂载路由
['App', 'Get', 'Put', 'Post', 'Delete']
  .forEach((m) => {
    require(`./${m}.js`)(router)
  })

// 向外导出路由
module.exports = router;