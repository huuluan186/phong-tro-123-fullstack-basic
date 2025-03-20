import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {v4} from 'uuid'
require('dotenv').config()
//hàm băm mật khẩu
const hashPassword= password => bcrypt.hashSync(password,bcrypt.genSaltSync(12))

export const registerService = ({phone,password,name})=> new Promise(async(resolve,reject)=>{
    try {
        const respone = await db.User.findOrCreate({
            where:{phone},
            defaults:{
                phone,
                name,
                password: hashPassword(password),
                id: v4()
            }
        })
        const token = respone[1] && jwt.sign({id:respone[0].id,phone:respone[0].phone},process.env.SECRET_KEY,{expiresIn:'2d'})
        resolve({
            err:token ? 0 : 2,
            msg: token ? 'Register is successfully !' : 'Phone number has been already used !',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})