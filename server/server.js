const express = require('express')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const root = require('./routes/root')

app.use(express.static(path.join(__dirname, 'public')))


console.log(path.join(__dirname, 'public'))
app.use('/',root)
app.listen(PORT,() => {
    console.log(`Server running at PORT ${PORT}`)
})