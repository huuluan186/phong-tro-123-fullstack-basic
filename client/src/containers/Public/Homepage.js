import React from 'react'
import {text} from '../../utils/constant'
import { Province } from '../../components'
import {List,Pagination} from './index'
import { useSearchParams } from 'react-router-dom' //tạo url có dấu ? và &
const Homepage = () => {

    const [params]=useSearchParams()
    // console.log(params.get('page')) //lấy giá trị của page từ url

  return (
    <div className='w-full border border-red-500 flex flex-col gap-3'>
        <div>
            <h1 className='text-[22px] font-bold' >{text.HOME_TITLE}</h1>
            <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
        </div>
        <Province/>
       <div className='w-full flex gap-4'>
            <div className='w-[70%]'>
                <List/>
                <Pagination number={params.get('page')}/>
                <div className='h-[500px]'>
                </div>
            </div>
            <div className='w-[30%] border border-green-500'>
                Sidebar
            </div>
       </div>
    </div>
  )
}

export default Homepage
