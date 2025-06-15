let JWT = require('jsonwebtoken');

module.exports = (req , res , next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({ error : "Access Denied"});
    }

    try{
        const verified = JWT.verify(token , process.env.JWT_SECRET);
        req.user = verified ;
        next();
    }
    catch{
        res.status(400).json({ error : "Invalid Token"});
    }
}