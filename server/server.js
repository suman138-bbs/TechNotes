require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const root = require('./routes/root')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')

connectDB()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', root)


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})
})


mongoose.connection.on('error', (err) => {
    console.log(err)
})