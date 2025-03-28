import React from 'react'
import {text} from '../../utils/constant'
import { Province } from '../../components'

const Homepage = () => {
  return (
    <div className='w-full border border-red-500 flex flex-col gap-3'>
        <div>
            <h1 className='text-[22px] font-bold' >{text.HOME_TITLE}</h1>
            <p className='text-base text-gray-700'>{text.HOME_DESCRIPTION}</p>
        </div>
        <Province/>
    </div>
  )
}

export default Homepage
