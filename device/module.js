// 此文件用于定义设备模型,但是这一个模型一次只能是生成一条指令去设定


let orangePiGpio = {
    sign: 'orangePiGpio',
    title: '鲜橙派Gpio',
    //连接相关的参数
    connect: {
        /** socket -> socket服务 http -> http请求 custom -> 自定义*/
        mode: 'custom',
        /**连接模式可以为多种  
        比如
            自己编写一些相关的函数进行连接
            通过socket服务来进行连接
            通过http请求来进行连接
            串口进行连接...暂时不会等后面更新
        */


        /** 控制函数
         * 
         */
        controlHandel(object) {

        },
        /** 指令生成函数,改函数应该是传入一定的参数自动生成一些操作 */
        intructionFn(object) {
            // 该函数用于根据对应的值来生成一些控制函数可以接受的值

        },
        /** 访问状态的操作,
         * 返回一个0或者1 
         * 0 -> off状态
         * 1 -> on状态
         */
        readHandel(object) {
            // 获取设备的连接信息
            let device_gpio = object.device.gpio;

            let stateValue = object.stateValue;
            //生成模型对象
            let offState = {
                level: typeof state.off.level != 'undefined' ? state.off.level : state.public.level,
                mode: typeof state.off.mode != 'undefined' ? state.off.mode : state.public.mode
            }

            let onState = {
                level: typeof state.on.level != 'undefined' ? state.on.level : state.public.level,
                mode: typeof state.on.mode != 'undefined' ? state.on.mode : state.public.mode
            }

            // 返回一个promise来传递数据
            return new Promise((resolve, reject) => {
                //使用数据获取api去获取数据
                gpio.getState(device_gpio, function(err, value) {
                    if (err) {
                        return reject(err)
                    }
                    //查看是否为开启状态,如果不是开启状态就默认为关闭的状态
                    if (value.level == onState.level || value.mode == onState.mode) {
                        resolve(1)
                    } else {
                        resolve(0)
                    }
                });
            });

        }
    }
}