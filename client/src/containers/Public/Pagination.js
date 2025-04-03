import React from 'react'
import { PageNumber } from '../../components'
import { useSelector } from 'react-redux'
import icons from '../../utils/icon'

const {GrFormNextLink} = icons

const Pagination = ({number}) => {
    const {count,posts}=useSelector(state=>state.post)

    const handlePageNumber=()=>{
        let max = Math.floor(count/posts.length)
        let arrNumber = []
        for (let i=1;i<=max;i++){
            arrNumber.push(i)
        }
        return arrNumber.length>3 ? arrNumber.slice(0,3) : arrNumber;
    }

    console.log(handlePageNumber())
  return (
    <div className='flex items-center justify-center gap-2 py-5'>
        {handlePageNumber()?.length>0 && handlePageNumber().map((item,index)=>{
            return(
                <PageNumber key={item} number={item} currentPage={number||1}/>
                
            )
        })}
        <PageNumber number={'...'}/>
        <PageNumber number={<GrFormNextLink/>} />
    </div>
  )
}

export default Pagination
