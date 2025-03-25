import React, { useCallback } from "react";
import logo from "../../assets/images/logowithoutbg.png";
// import "../../assets/styles/page/Header.scss"; // Import SCSS riêng của Header
import {Button} from "../../components";
import icons from "../../utils/icon";
import {Link, useNavigate} from 'react-router-dom';
import { path } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../store/actions'
const {CiCirclePlus}=icons

const Header = () => {
    const {isLoggedIn}=useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goLogin = useCallback((flag)=>{
        navigate(path.LOGIN,
            {state:{
                flag
            }}
        )
    })
  return (
    <div className="w-1100">
        <div className="w-full flex items-center justify-between">
            <Link to={'/'}><img src={logo} alt="logo" className='w-[240px] h-[70px] object-contain'/></Link>
            <div className='flex items-center gap-2'>
                {!isLoggedIn &&
                    <div className="flex items-center gap-2">
                    <small>Phongtro123.com xin chào!</small>
                    <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={()=>goLogin(false)}/>
                    <Button text={'Đăng ký'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={()=>goLogin(true)}/>
                </div>
                }

                {isLoggedIn &&
                    <div className="flex items-center gap-2">
                    <small>Phongtro123.com xin chào Ten!</small>
                    <Button text={'Đăng xuất'} textColor='text-white' bgColor='bg-red-700' onClick={()=> dispatch(actions.logout())}/>
                </div>
                }
                <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-secondary2' IcAfter={CiCirclePlus}/>     
            </div>
        </div>
    </div>
  );
};

export default Header;
