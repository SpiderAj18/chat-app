import jwt from 'jsonwebtoken'

const generateToken =(userId,res)=>{
    const token  =jwt.sign({userId},process.env.SECRET,{
        expiresIn:"3d"
    })

    res.cookie("jwt",token,{
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent XSS attacks ross-site scripting attacks (read about it)
    })
}

export default generateToken