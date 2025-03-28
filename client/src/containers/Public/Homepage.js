import React from 'react'
import {Search} from './index'
import {text} from '../../utils/constant'
const Homepage = () => {
  return (
    <div className='w-full border border-red-500 flex flex-col gap-3'>
        <Search/>
        <div>
            <h1 className='text-[22px] font-bold' >{text.HOME_TITLE}</h1>
            <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
        </div>
    </div>
  )
}

export default Homepage
