import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { signIn } from "../apis/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Signin (props) {
  
  const navigate = useNavigate();
  
  useEffect(() => {
   if(localStorage.getItem("JWT") !== null)
    return navigate("/todo");
  }, []);
  
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

  const submit = async (e) => {
    const data = {
      email: userId,
      password: userPwd,
    };
    e.preventDefault();
    signIn(data).then((res) => {
      localStorage.setItem("JWT", res.data.access_token)
      navigate("/todo");
    });
  };


  return (
  <SigninBox>
    
    <Grid padding="16px">
      <Grid textAlign="center" width="200px" margin="auto" >
        <Text size="32px" bold>
          로그인
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
            />
          </Grid>
        </Text>  
      </Grid>               
  
      <Grid textAlign="center">
        <Button 
          onClick={submit}>
            로그인
        </Button>
        
        <Link to = "/signup">
          <Text size="15px" bold>
            회원가입
          </Text>
        </Link>
      </Grid>
    </Grid>
  </SigninBox>
  );
};

const SigninBox = styled.main`
`

const Button = styled.button`
`
 