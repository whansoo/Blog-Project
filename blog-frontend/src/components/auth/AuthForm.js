import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 500px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  /* background-color: white; */
  background-color: #f5f5f5;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family:futurademregular;
  color: rgb(34,34,34);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


/**에러를 보여줍니다. */
const ErrorMessage = styled.div`
color: red;
text-align: center;
font-size: 0.875rem;
margin-top: 1rem;
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};
const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
    return (
        <Container>
            <Wrapper>
            <Title>{text}</Title>
            <Form onSubmit={onSubmit}>
                <Input autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username}/>
                <Input 
                    autoComplete="new-password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={form.password}
                    />
                    {type === 'register' && (
                      <Input
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                        />
                    )}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button>
                   {text}
                 </Button>
        </Form>
          {type === 'login' ? (<Link to = "/register">회원가입</Link>)
             : (<Link to="/login">로그인</Link>
             )}
            
          </Wrapper>
        </Container>
    )

}

export default AuthForm;