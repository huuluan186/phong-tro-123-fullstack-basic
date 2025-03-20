import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Nav from "./Navigation";
const Home = () => {
    return(
        <div className="w-full flex flex-col items-center m-auto h-full">
            <Header/>
            <Nav/>
            <div className="w-1100 flex flex-col items-center justify-start mt-3 bg-primary">
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;