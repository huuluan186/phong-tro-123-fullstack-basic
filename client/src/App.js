import { Routes, Route, Navigate } from "react-router-dom";
import { path } from "./utils/constant";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Homepage, Login, RentalApartment, RentalGround, RentalHouse, RentalRoom } from "./containers/Public";

function App() {
  return (
    <div className="bg-primary">
        <Routes>
            <Route path={path.HOME} element={<Home />}>
                <Route index element={<Homepage />} />
                <Route path={path.HOME__PAGE} element={<Homepage />} />
                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
                <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
                <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
                <Route path={path.CHO_THUE_MAT_BANG} element={<RentalGround />} />
                {/* Nếu nhập sai path, tự động điều hướng về Homepage */}
                <Route path="*" element={<Navigate to={path.HOME} replace />} />
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
