import React,{memo, useState} from 'react'
import icons from '../utils/icon'

const {FaHeart,FaRegHeart,FaStar,BsBookmarkStarFill} = icons

const indexs=[0,1,2,3]

const Item = ({ images, user, title, star, description, attributes, address, id }) => {
    const [isHoverHeart,setIsHoverHeart] = useState(false)

  return (
    <div className='w-full flex gap-2 border-t border-orange-600 p-4'>
        <div className='w-[40%] h-[240px] grid grid-cols-2 gap-[2px] cursor-pointer relative '>
            {images.length > 0 && images.filter((i, index) => indexs.includes(index))?.map((i,index) => (
                <img key={index} src={i} alt='preview' className='w-[140px] h-[120px] object-cover'/>
            ))}

            <span className='text-white bg-overlay-70 px-2 rounded-md absolute bottom-1 left-1'>{`${images.length} ảnh`}</span>
            <span className='text-white px-2 rounded-md absolute bottom-1 right-3' onMouseEnter={()=>setIsHoverHeart(true)} onMouseLeave={()=>setIsHoverHeart(false)}>
                {isHoverHeart ? <FaHeart size={26} color='red' />
                : <FaRegHeart size={26} />}
            </span>
        </div>
        <div className='w-[60%]'>
            <div className='flex justify-between gap-4'>
                <div className='text-red-600 font-medium'>
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                   {title}
                </div>
                <div className='w-[10%] flex justify-end'>
                    <BsBookmarkStarFill size={24} color='orange'/>
                </div>
            </div>
            <div className='my-2 flex items-center justify-between gap-2'>
                <span className='flex-3 font-bold text-green-600 whitespace-nowrap overflow-hidden text-ellipsis ' title={attributes?.price}>{attributes?.price} </span>
                <span className='flex-1'>{attributes?.acreage}</span>
                <span className='flex-3'>{address}</span>
            </div>
            <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden '>{description}</p>
            <div className='flex items-center my-5 justify-between'>
                <div className='flex items-center'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt='avatar' className='w-[30px] h-[30px] object-cover rounded-full' />
                    <p className='text-[11px]'>{user?.name}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <button type='button' className='bg-green-700 text-white p-1 rounded-md'>
                    {`Gọi ${user?.phone}`}</button>
                    <button type='button' className='text-blue-700 rounded-md border border-blue-700'>Nhắn zalo
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Item)
