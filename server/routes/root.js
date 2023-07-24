const express = require('express');
const router = express.Router();//
const path = require('path');




router.get('^/$|/index', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})


router.get('/*', (req, res) =>
    res.status(404).sendFile(path.join(__dirname,'..','views','404.html'))
)


module.exports = router