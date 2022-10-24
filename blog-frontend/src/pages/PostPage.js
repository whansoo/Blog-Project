import React from "react";
import Footer from "../components/Footer";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
    return(
        <>
         <HeaderContainer/>
         <PostViewerContainer/>
         <Footer/>
        </>
    )
};

export default PostPage;