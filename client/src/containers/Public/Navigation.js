import React, {useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { toSlug } from "../../utils/Common/toSlug";

const notActive = 'hover:bg-secondary2 py-2 px-4 bg-secondary1 h-full flex justify-center items-center'
const active = 'hover:bg-secondary2 py-2 px-4 bg-secondary2 h-full flex justify-center items-center'

const Nav = ()=>{

    const [categories, setCategories]=useState([])

    useEffect(()=>{
        const fetchCategories = async ()=>{
            const response = await apiGetCategories()
            if(response?.data.err===0){
                setCategories(response.data.response)
            }
        }
        fetchCategories()
    },[])

    return(
        <div className="w-screen flex justify-center items-center  text-white bg-secondary1 h-[40px]">
            <div className="w-1100 flex h-full items-center text-sm font-medium">
                <NavLink to={'/'} className={({isActive})=> isActive ? active: notActive}>Trang Chủ</NavLink>
                {categories?.length > 0 && categories.map((item) => {
                    return(
                        <div key={item.code} class='h-full flex justify-center items-center'>
                            <NavLink to={`${toSlug(item.value)}`} className={({isActive})=>
                                isActive ? active: notActive
                            }>
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav;