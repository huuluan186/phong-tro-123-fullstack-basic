import db from '../models'
import attribute from '../models/attribute'

export const getPostsService = () => new Promise(async (resolve,reject) =>{
    try {
        const response = await db.Post.findAll({
            raw:true,
            nest:true, //gộp thành mảng
            include:[
                {model:db.Image,as:'images',attributes:['image']},
                {model:db.Attribute,as:'attributes',attributes:['price','acreage','published','hashtag']},
                {model:db.User,as:'users',attributes:['name','zalo','phone']},
            ],
            attributes:['id','title','star','address','description']
        })
        resolve({
            err:0,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })
    } catch (error) {
        reject(error)
    }
})


//để phân trang
export const getPostsLimitService = (offset) => new Promise(async (resolve,reject) =>{
    try {
        const response = await db.Post.findAndCountAll({
            raw:true,
            nest:true, //gộp thành mảng
            offset: offset * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,
            include:[
                {model:db.Image,as:'images',attributes:['image']},
                {model:db.Attribute,as:'attributes',attributes:['price','acreage','published','hashtag']},
                {model:db.User,as:'users',attributes:['name','zalo','phone']},
            ],
            attributes:['id','title','star','address','description']
        })
        resolve({
            err:0,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })
    } catch (error) {
        reject(error)
    }
})