import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding: 10px;
  background-image: url("images/cat2.png");
  background-size: 650px;
`;

const Wrapper = styled.div`
  padding: 41px;
  box-shadow: 17px 11px 5px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  width: 23vw;
  height: 34vw;
  z-index: 2;
  position: relative;
  background-image: url("images/galcat2.png");
  background-size: 490px;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family:futurademregular;
  color: white;
`;
const RegisterRouter = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-top: 11px;
  margin-right: 12px;
`;
const RegisterSpan = styled.span`
  display: flex;
  align-items: center;
  
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
color: white;
  background: aqua;
  border: none;
  border-radius: 26px;
  font-size: 15px;
  padding: 11px;
  font-weight: 300;
  width: 23vw;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const Line = styled.div`
padding-top: 110px;
  display: flex;
	flex-basis: 100%;
	align-items: center;
	color: rgba(0, 0, 0, 0.35);
	font-size: 12px;
	margin: 8px 0px;
  ::before,
  ::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 5px;
  }
`

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
            
            
            {type === 'login' ? (<Link to = "/register" style={{color: 'blue'}}><RegisterSpan><RegisterRouter>신규 사용자이신가요?</RegisterRouter>회원가입</RegisterSpan></Link>)
             : (<Link to="/login" style={{color: 'blue'}}><RegisterSpan><RegisterRouter>이미 가입을 하셨나요?</RegisterRouter>로그인</RegisterSpan></Link>
             )}
             
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
                 <Line>간편 로그인</Line>
        </Form> 
          </Wrapper>
        </Container>
    )

}

export default AuthForm;