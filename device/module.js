// 此文件用于定义设备模型


let orangePiGpio = {
    sign: 'orangePiGpio',
    title: '鲜橙派',
    //连接相关的参数
    connect: {
        mode: 'socket',
        /**连接模式可以为多种  
                比如
                    自己编写一些相关的函数进行连接
                    通过socket服务来进行连接
                    通过http请求来进行连接
                    串口进行连接...暂时不会等后面更新
                */

    }
}