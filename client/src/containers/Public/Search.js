import React from 'react'
import { Button, SerchItem } from '../../components'
import icons from '../../utils/icon'

const {GrNext,IoLocationOutline,
    PiMoneyWavy,
    SlCrop,IoHomeOutline,CiSearch}=icons

const Search = () => {
    return (
      <div className='p-[10px] w-[80%] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2 mx-auto'>
        <SerchItem  IconBefore={<IoHomeOutline />} IconAfter={<GrNext color='rgb(156,163,175)'/>} text="Phòng trọ, nhà trọ" fontWeight/>
        <SerchItem IconBefore={<IoLocationOutline />} IconAfter={<GrNext color='rgb(156,163,175)'/>} text='Chọn giá'/>
        <SerchItem IconBefore={<PiMoneyWavy />} IconAfter={<GrNext color='rgb(156,163, 175)'/>} text='Toàn quốc'/>
        <SerchItem IconBefore={<SlCrop />} IconAfter={<GrNext color='rgb(156,163, 175)'/>} text='Chọn diện tích' />
        <button type='button' className='w-full bg-secondary1 outline-none py-2 px-4 text-[12.3px] flex items-center justify-center gap-2 text-white font-medium rounded-md'>
            <CiSearch/>
            Tìm kiếm
        </button>
      </div>
    )
  }
  

export default Search
