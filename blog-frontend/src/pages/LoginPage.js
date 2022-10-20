import React from "react";
import Header from "../components/common/Header";
// import AuthTemplate from "../components/auth/AuthTemplate";
import Footer from "../components/Footer";
import LoginForm from "../containers/auth/LoginForm";
// import HeaderContainer from "../containers/common/HeaderContainer";


const LoginPage = () => {
    return (
       <>
       <Header/>
       <LoginForm/>
       <Footer/>
       </>
    )
};

export default LoginPage;