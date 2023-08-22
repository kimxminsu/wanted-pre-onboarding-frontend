import React, {useState} from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { signUp } from "../apis/auth";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp (props) {
  const navigate = useNavigate();
  
  const [input, setInput] = useState({
    userId: "",
    userPwd: "",
  });
  const { userId, userPwd } = input;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

// 회원가입 post 요청
  const submit = async (e) => {
    const data = {
      email: userId,
      password: userPwd,
    };
    e.preventDefault();
    signUp(data).then((res) => {
      navigate("/signin");
    });
  };

  return (
    <SignUpBox>
      <Grid padding="16px">
        <Grid textAlign="center" width="200px" margin="auto" >
          <Text size="32px" bold>
            회원가입
          </Text>
        </Grid>
      
      <Grid textAlign="center">
        <Text size="15px" bold>
          <Grid>
            이메일
            <input style={{marginLeft:"20px"}}
              name="userId"
              type="text"
              onChange={handleInput}
              value={userId}
              placeholder="@ 포함"
            />
          </Grid>
        </Text>

        <Text size="15px" bold>
          <Grid>
            비밀번호
            <input style={{marginLeft:"10px"}}
              name="userPwd"
              type="password"
              onChange={handleInput}
              value={userPwd}
              placeholder="8자리 이상"
            />
          </Grid>
        </Text>  
      </Grid>

        <Grid textAlign="center">
          <Button
            onClick={submit}
            // 버튼 비활성화를 통한 유효성 검사 
            disabled={userId.includes("@") !== true || userPwd.length < 8 }>
            가입하기
          </Button>
          <Link to = "/signin">
          <Text size="15px" bold>
            로그인
          </Text>
          </Link>
        </Grid>
      </Grid>
    </SignUpBox>
  )
}

const SignUpBox = styled.main`
`

const Button = styled.button`
`