let User = require('../models/user');
let bcrypt = require('bcryptjs');
let JWT = require('jsonwebtoken');

// register 

module.exports.register = async (req, res) => {
    console.log(req.body);
    let { username , password , email , role} = req.body;
    let bcryptPassword = await bcrypt.hash(password , 10);
    
    try{
        const newUser = new User({ username , password : bcryptPassword , email , role});
        await newUser.save();
        res.status(201).json('New User Added');    
    }
    catch{
        res.status(400).json('email is already exist!!');
    }
}

//login

module.exports.login = async (req , res) => {
    let { email , password } = req.body;
    let user = await User.findOne({ email });
    if(!user){
        return res.status(400).json('invalid Credentials');
    }

    let isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
        return res.status(400).json('invalid Credentials');
    }

    const token = JWT.sign({ id : user._id , role : user.role }, process.env.JWT_SECRET);
    res.json({token , role : user.role});
}