const User = require('../Models/User');

exports.Users =  (req, res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phoneNo = req.body.phoneNo;
        const password = req.body.password;


        const user = new User({
            name:name,
            email:email,
            phoneNo:phoneNo,
            password:password,
        })

        const userData = user.save();


        res.send({
            message:"User created ",
            Data: user,

        })
    } catch (error) {
        res.send("Error ",error)
    }
}