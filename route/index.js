let router = require('express').Router()

router.get('/', (req, res) => {
    console.log('收到请求')
    res.send('感谢你访问本网站')
})

module.exports = router;