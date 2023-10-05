import React from "react";
import { BrowserRouter, Routes,Route,  } from 'react-router-dom'
// import HomeHeader from "./Header/HomeHeader";
import UserSignUp from "./signup/UserSignUp";
import UserLogin from "./login/UserLogin";
import CreateOrder from "./Product/createorder/CreateOrder";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path='/register'element={<UserSignUp/>}> </Route>
            <Route path='/login'element={<UserLogin/>}> </Route>
            <Route path='/'element={<UserLogin/>}> </Route>
            <Route path='/create-order'element={<CreateOrder/>}> </Route>

            {/* <Route path="/" element={<HomePage />}>
                <Route path="/" element={<HomeCard/>}/>
            
            </Route>
            <Route path="user" element={<HomePage/>}>
                <Route path="login" element={<UserLogin />} />
                <Route path="register" element={<UserRegister />} />
            </Route>
            <Route path="admin" element={<HomePage/>}>
                <Route path="login" element={<AdminLogin/>} />
                <Route path="register" element={<AdminRegister/>} />
            </Route>
             */}
        </Routes>
        

    </BrowserRouter>
}