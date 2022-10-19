import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Wrap = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    
    text-decoration: none;
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    color: black;

`
const Intro = styled.div`
    background: #fff;
    box-shadow: 0 1px 0 0 #d6d6d6;
    z-index: 9999;
    text-shadow: none;
    width: 100%;

`
const Header = styled.div`
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

const Navbar= () => {

    
     
  return (
    
    <Wrap>
     <Intro>
         <Header>
            <Logo>
                <Image src='../images/테코몽.png' alt='사진'/>
                 <Name>테코몽 공식 블로그</Name>
            </Logo>
            <Nav>
                <Navli>HOME</Navli>
                <Navli>ABOUT</Navli>
                <Navli>SERVICE</Navli>
                <Navli>CONTACT</Navli>
            </Nav>
         </Header>
      </Intro>
    </Wrap>
    
  )
}

export default Navbar