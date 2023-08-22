import axios from "axios";

const serverUrl = "https://www.pre-onboarding-selection-task.shop"


// 로그인 전 요청 인스턴스
export const instance = axios.create ({
  baseURL: serverUrl,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});


// 로그인 후 요청 인스턴스
export const requiredInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});
// 로그인 성공 후 토큰을 포함해 응답하기 위한 로직
requiredInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("JWT");
  config.headers.common["Authorization"] = `Bearer ${token}`;
  
  return config;
});
