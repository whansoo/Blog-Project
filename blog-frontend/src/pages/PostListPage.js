import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HeaderContainer from "../containers/common/HeaderContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import PostListContainer from "../containers/posts/PostListContainer";
const PostListPage = () => {
    return (
        <>
        <HeaderContainer/>
        <Slider/>
        <PostListContainer/>
        <PaginationContainer/>
        <Footer/>
        </>
    )
};

export default PostListPage;