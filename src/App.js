import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Todo from "./page/Todo";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 404 리다이렉트 처리 */}
          <Route path="/*" element={<Navigate to="/"></Navigate>} />
          {/* 페이지 라우터 처리 */}
          <Route path="/" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
