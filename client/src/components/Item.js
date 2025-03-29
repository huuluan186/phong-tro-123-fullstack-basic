import React,{memo} from 'react'
import icons from '../utils/icon'
const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
]

const {FaHeart,FaRegHeart,FaStar,BsBookmarkStarFill} = icons

const Item = () => {
  return (
    <div className='w-full flex gap-2 border-t border-orange-600 p-4'>
        <div className='w-[40%] grid grid-cols-2 gap-[2px]'>
            <img src={images[0]} alt='preview' className='w-[140px] h-[120px] object-cover'/>
            <img src={images[1]} alt='preview' className='w-[140px] h-[120px] object-cover'/>
            <img src={images[2]} alt='preview' className='w-[140px] h-[120px] object-cover'/>
            <img src={images[3]} alt='preview' className='w-[140px] h-[120px] object-cover'/>
        </div>
        <div className='w-[60%]'>
            <div className='flex justify-between gap-4'>
                <div className='text-red-600 font-medium'>
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                     <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    <FaStar className='inline-block mb-[6px]' size={18} color='yellow' />
                    CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
                </div>
                <div className='w-[10%] flex justify-end'>
                    <BsBookmarkStarFill size={24} color='orange'/>
                </div>
            </div>
            <div className='my-2 flex items-center justify-between'>
                <span className='font-bold text-green-600'>3.7 triệu/tháng</span>
                <span>28m&sup2;</span>
                <span>Quận Tân Bình, Hồ Chí Minh</span>
            </div>
            <p className='text-gray-500'>Phòng đầy đủ ánh sáng, nội thất mới hoàn toàn.An ninh, vị trí thuận tiện, xe hơi tới cửa.Phòng mình đang ở, đảm bảo như ảnh, tránh mất thời…</p>
            <div className='flex items-center my-5 justify-between'>
                <div className='flex items-center'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt='avatar' className='w-[30px] h-[30px] object-cover rounded-full' />
                    <p>Tuệ Thu</p>
                </div>
                <div className='flex items-center gap-1'>
                    <button type='button' className='bg-green-700 text-white p-1 rounded-md'>
                    Gọi 01372328328</button>
                    <button type='button' className='text-blue-700 rounded-md border border-blue-700'>Nhắn zalo
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Item)
