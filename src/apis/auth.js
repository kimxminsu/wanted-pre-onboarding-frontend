import {instance} from "./index"

  // 회원가입
  export const signUp = async (data) => {
    try {
      const res = await instance.post("/auth/signup", data);
      return res;
    } catch (error) {
      if (error.request.statues !== 200) {
        alert("이미 사용중인 이메일입니다.");
      }
      console.log(error);
    }
  };

  // 로그인
  export const signIn = async (data) => {
    try {
      const res = await instance.post("/auth/signin", data);
      return res;
    } catch (error) {
      if (error.request.statues !== 200) {
        alert("이메일/비밀번호가 틀렸습니다.");
      }
      console.log(error);
    }
  };

// } 

