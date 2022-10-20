import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/Footer";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <>
        <Header/>
        <RegisterForm />
        <Footer/>
        </>
        
    )
}

export default RegisterPage;