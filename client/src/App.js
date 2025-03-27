import { Routes,Route } from "react-router-dom";
import { path } from "./utils/constant";
import { ToastContainer,toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './assets/styles/main.scss'
import { Home, Homepage, Login, RentalApartment, RentalGround, RentalHouse, RentalRoom} from "./containers/Public";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
        <Routes>
            <Route path={path.HOME} element={<Home />}>
                <Route path="*" element={<Homepage/>}/>
                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment/>}/>
                <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom/>}/>
                <Route path={path.NHA_CHO_THUE} element={<RentalHouse/>}/>
                <Route path={path.CHO_THUE_MAT_BANG} element={<RentalGround/>}/>
            </Route>
        </Routes>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </div>
  );
}

export default App;
