import React,{useState,useEffect} from "react";
import {Button,InputForm} from '../../components'
import { useLocation, useNavigate } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import * as actions from '../../store/actions'
import { useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
 
const Login = () => {

    const location = useLocation()
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const {isLoggedIn,msg,update} =useSelector(state=>state.auth) // .auth do define trong rootReducer 
    const [isRegister,setIsRegister]= useState(location.state?.flag) //?: state có giá trị mới trỏ đến flag

    const [invalidFields, setInvalidFields] = useState([])

    useEffect(() => {
        // Cập nhật giá trị của isRegister bằng flag từ location.state (nếu có)
        if (location.state?.flag !== undefined) {
            setIsRegister(location.state.flag);
        }
    }, [location.state?.flag]); // Chạy lại khi location.state?.flag thay đổi
    
    useEffect(()=>{
        isLoggedIn && navigate('/')
    },[isLoggedIn])

    useEffect(()=>{
       msg && toast.error(msg)
    },[msg,update])

    const [payload,setPayLoad] = useState({
        phone:'',
        password:'',
        name:''
    })

    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        let invalids=validate(finalPayload)
        if(invalids===0) await isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
        console.log("invalids: ",invalids)
        
    };

    const validate = (payload) => {
        let invalids=0
        let fields = Object.entries(payload)
        fields.forEach(item =>{
            if(item[1]===''){
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            } 
        })

        fields.forEach(item => {
            switch(item[0]){
                case 'password':
                    if(item[1].length < 6){
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if(!+item[1]){
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break;

                default:
                    break
            }
        })

        //console.log(payload)
        return invalids;
    }

    return(
        <div className="w-full bg-white max-w-600 p-[30px] pb-[100px] rounded-md shadow-sm ">
            <h3 className="font-semibold text-2xl mb-3 text-center">{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister &&  <InputForm invalidFields={invalidFields} setInvalidFields={setInvalidFields} label={'Họ Tên'} value={payload.name} setValue={setPayLoad} keyPayload={'name'}/> }
                <InputForm invalidFields={invalidFields} setInvalidFields={setInvalidFields} label={'Số điện thoại'} value={payload.phone} setValue={setPayLoad} keyPayload={'phone'}/>
                <InputForm type='password' invalidFields={invalidFields} setInvalidFields={setInvalidFields} label={'Mật khẩu'} value={payload.password} setValue={setPayLoad} keyPayload={'password'}/>
                <Button text={isRegister ? 'Đăng ký' : 'Đăng nhập'} bgColor='bg-secondary2' text-color="text-white" fullWidth onClick={handleSubmit}/>
            </div>
            <div className="mt-7 flex items-center justify-between">
               {isRegister ? <small>Bạn đã có tài khoản? 
                <span onClick={()=>{
                setIsRegister(false) 
                setPayLoad({
                 phone:'',
                 password:'',
                 name:''
               })}} className="text-blue-500 hover:underline cursor-pointer">Đăng nhập ngay</span>
               </small>
               :
                <>
                     <small className="text-blue hover:text-[red] cursor-pointer" >Bạn quên mật khẩu?</small>
                     <small onClick={()=>{
                        setIsRegister(true) 
                        setPayLoad({
                        phone:'',
                        password:'',
                        name:''
                        })}} className="text-blue hover:text-[red] cursor-pointer">Tạo tài khoản mới
                    </small>
                </>
               }
            </div>
        </div>
    )
}

export default Login;