import React,{useState,useEffect} from "react";
import {Button,InputForm} from '../../components'
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

const Login = () => {

    const location = useLocation()
    const dispatch = useDispatch() 

    const [isRegister,setIsRegister]= useState(location.state?.flag) //?: state có giá trị mới trỏ đến flag

    useEffect(() => {
        // Cập nhật giá trị của isRegister bằng flag từ location.state (nếu có)
        if (location.state?.flag !== undefined) {
            setIsRegister(location.state.flag);
        }
    }, [location.state?.flag]); // Chạy lại khi location.state?.flag thay đổi
    
    const [payload,setPayLoad] = useState({
        phone:'',
        password:'',
        name:''
    })

    const handleSubmit = async () => {
        console.log(payload);
        await isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
    };
    

    return(
        <div className="w-full bg-white max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm ">
            <h3 className="font-semibold text-2xl mb-3 text-center">{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister &&  <InputForm label={'Họ Tên'} value={payload.name} setValue={setPayLoad} type={'name'}/> }
                <InputForm label={'Số điện thoại'} value={payload.phone} setValue={setPayLoad} type={'phone'}/>
                <InputForm label={'Mật khẩu'} value={payload.password} setValue={setPayLoad} type={'password'}/>
                <Button text={isRegister ? 'Đăng ký' : 'Đăng nhập'} bgColor='bg-secondary2' text-color="text-white" fullWidth onClick={handleSubmit}/>
            </div>
            <div className="mt-7 flex items-center justify-between">
               {isRegister ? <small>Bạn đã có tài khoản? <span onClick={()=>setIsRegister(false)} className="text-blue-500 hover:underline cursor-pointer">Đăng nhập ngay</span></small>
               :
                <>
                     <small className="text-blue hover:text-[red] cursor-pointer" >Bạn quên mật khẩu?</small>
                     <small onClick={()=>setIsRegister(true)} className="text-blue hover:text-[red] cursor-pointer">Tạo tài khoản mới</small>
                </>
               }
            </div>
        </div>
    )
}

export default Login;