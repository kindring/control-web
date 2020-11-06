// 先用单文件来进行数据逻辑梳理
// 时序电源案例

/**创建模型,只是用来存储一些指令*/
let module = {
    title: '时序电源',
    sign: `测试用时序电源`,
    instruction: {
        /** 设置状态的函数
         * 传入自定义的参数,返回两个数据
         * 请求的数据,
         * 严重的数据
         * @param {*} obj 
         */
        setState(obj) {
            //根据传入的参数来生成指令
            /** 指令类型,联合,反转,开启,单独 */
            // let type = obj.type;
            /** 设备地址 */
            let address = this.address;
            /** 状态 */
            let state = obj.state;
            /** 通道参数 */
            let aisle = obj.aisle;

            switch (state) {
                case 0:
                case 'off':
                case '关':
                    state = '00'
                    break;
                case 1:
                case 'on':
                case '开':
                    state = '01'
                    break;
            }

            switch (aisle) {
                case 'all':
                    aisle = state == '00' ? '10' : '12'
                    break;
                case 'delay':
                    aisle = state == '00' ? '00' : '11'
            }
            /** 请求的数据 */
            let requestData = `${address} 16 00 00 00 ${state} ${aisle} AA`
                /** 用于验证的数据 */
            let verifyData = `${address} AA 00 00 00 ${state} ${aisle} AA`
            return {
                requestData,
                verifyData
            }
        },

        /** 状态获取操作
         * 
         * @param {*} obj 
         */
        getState(obj) {
            //根据参数获取状态
            /** 设备地址 */
            let address = this.address;
            /** 通道参数 */
            let requestData = `0${address} 02 20 16 00 00 00 00`;
            return function() {

            }
        }
    }
}


/** 实例数据 */
let one = {
    dervice: '测试用时序电源',
    //实例标记,用于创建
    sign: '1机柜',
    //连接协议和数据
    protocol: {
        // 连接协议 udp客户端
        type: 'udp-client',
        options: {
            ip: '127.0.0.1',
            port: '59999'
        }
    },
    data: {
        address: 1,
    }
}


/** 这个联系到前端的数据, */
let pc = {
    //数据类型,联合类型
    type: 'dervice',
    //需要连接的控制器
    controll: [{
            sign: '1机柜',
            data: {
                //1号口
                aisle: 1,
            },
        },
        {
            sign: '128',
        }
    ],
    // 状态指示,用来获取数据.看如何获取数据
    state: {
        monitor: []
    }
}