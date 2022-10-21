import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../../modules/user'

const Wrap = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    text-decoration: none;
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    color: black;
    
`
const Intro = styled.div`
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 1px 0 0 #d6d6d6;
    z-index: 9999;
    text-shadow: none;
    width: 100%;

`
const Header1 = styled.div`
    display: flex;
    width: 1280px;
    height: 80px;
    margin: auto;

`
const Logo = styled.div`
display: flex;

`
const Name = styled.span`
    color: black;
    font-weight: 700;
    font-size: 16px;
    line-height: 80px;
`
const Image = styled.img`
   width: 60px;
   height: 60px;
   margin-top: 10px;
`;

const Nav = styled.ul`
 display: flex;
    justify-content: flex-end;
    width:calc(1280px - 200px);
    line-height: 80px;
    margin: 0px;
    padding: 0px;
`
const Navli = styled.li`
margin-left: 84px;
    font-size: 14px;
    font-weight: 700;
    list-style: none;
    /* color: #ff540f; */
`
const UserInfo = styled.div`
  font-weight: 800;
  margin-left: 84px;
  
`
const Header = () => {
    const { user } = useSelector(
        ({user}) => ({
          user : user.user
        })
      )
      const dispatch = useDispatch();
   
      
        const onLogout = () => {
            dispatch(logout());
        }   
     
  return (
    
    <Wrap>
     <Intro>
         <Header1>
            <Logo>
                <Image src='../images/테코몽.png' alt='사진'/>
                 <Name><Link to='/'>테코몽 공식 블로그</Link></Name>
            </Logo>
            <Nav>
             {user ? ( <Navli><Link to='/' onClick={onLogout}>로그아웃</Link></Navli>)
                  
              : (
                <Navli><Link to='/login'>로그인</Link></Navli>
                )}
                <Navli><Link to='/register'>회원가입</Link></Navli>
                {/* <Navli>홈</Navli> */}
                <Navli>마이페이지</Navli>
                {user? (<UserInfo>ID: {user.username}</UserInfo>) : (<></>)}
                </Nav>
         </Header1>
      </Intro>
    </Wrap>
    
  )
}

export default Header