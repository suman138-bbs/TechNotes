const express = require('express');
const router = express.Router();//
const {getAllUsers,createNewUser,updateUser,deleteUser} = require('../controllers/userController')

router.route('/')
    .get(getAllUsers)
    .post(createNewUser)
    .patch(updateUser)
    .delete(deleteUser)

console.log("HELLO")
module.exports = router    
