const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()
    if (!users) {
        return res.status.json({message:'No Users found'})
    }

    res.json(users)
    
})
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, roles } = req.body;
    if (!username || !password || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({message:"All fields are required"})
    }

    const duplicate  = await User.find({username}).lean().exec()
}) 

const updateUser = asyncHandler(async (req,res) => {
    
})

const deleteUser = asyncHandler(async (req,res) => {
    
})


module.exports =  {getAllUsers,createNewUser,updateUser,deleteUser}