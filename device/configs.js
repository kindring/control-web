/** 创建一个实例化的智能对象 */
module.exports = {
    tableLamp: {
        title: '台灯',
        sign: 'tableLamp',
        controller: 'orangePizero',
        /**通过控制设备 */
        state: {
            off: [10, 1, 'in'],
            on: [10, 1, 'out']
        }
    }
}