let express = require('express')
let serverConfig = require('./configs/server')
let tools = require('./tools')
let route = require('./route/index')
let app = express();

/** 使用路由 */
app.use(route);


app.listen(serverConfig.port, () => {
    console.log(`服务器成功启动\n
    可以本机访问@http://127.0.0.1:${serverConfig.port}\n
    局域网访问@http://${tools.ip.getIp()}:${serverConfig.port}
    `)
})