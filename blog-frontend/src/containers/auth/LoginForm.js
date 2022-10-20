import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { check } from "../../modules/user";

const LoginForm = () => {
  const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
        //비구조화 할당 const form = useSelector(({auth}) => auth.login); connect함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
    }));
    //인풋 변경 이벤트 핸들러
    const onChange = e => {
    const { value, name } = e.target;
   
    //비구조화 할당
    // const a = e.target.value
    // const b = e.target.name
    dispatch (
        changeField({  //리듀서의 액션 생성 함수의 객체를 가져온다.액션 생성 함수를 실행시킨다.
            form:'login',
            key: name, 
            value
        })
    )
};

//폼 등록 이벤트 핸들러
const onSubmit = e => {
    e.preventDefault(); //새로고침 방지, 이벤트의 기본 기능을 막는것,input 또는 button 클릭 이벤트가 발생 했을때 페이지가 리로드가 되는데 그 현상을 막아줌
    const { username, password } = form;
    dispatch(login({username, password}));
}

//컴포넌트가 처음 렌더링 될 때 form을 초기화함
useEffect(() => {
    dispatch(initializeForm('login'));
}, [dispatch]);


useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  //로그인 유지 기능 user의 정보를 localstorage안에 저장 한다
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      }catch (e) {
        console.log ('localStorage is not working');
      }
    }
  }, [navigate, user]);

return(  
    <AuthForm
    type="login"
    form={form}
    onChange={onChange}
    onSubmit={onSubmit}
    error={error}
  />

)
};
export default LoginForm;