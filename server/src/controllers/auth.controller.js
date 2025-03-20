import * as authService from '../services/auth'

export const register = async (req,res)=>{
    const {name,phone,password} = req.body
    try{
        if (!name || !phone || !password){
            return res.status(400).json({
                err:1,
                msg:"Missing input!"
            })
        }
            
        const respone = await authService.registerService(req.body)
        return res.status(200).json(respone)

    }catch(error){
        return res.status(500).json({
            err:-1,
            msg:'Failed at auth controller: '+ error
        })
    }
}

export const login = async (req,res)=>{
    const {phone,password} = req.body
    try{
        if (!phone || !password){
            return res.status(400).json({
                err:1,
                msg:"Missing input!"
            })
        }
            
        const respone = await authService.loginService(req.body)
        return res.status(200).json(respone)

    }catch(error){
        return res.status(500).json({
            err:-1,
            msg:'Failed at auth controller: '+ error
        })
    }
}

//lỗi âm : lỗi server , dương: lỗi client