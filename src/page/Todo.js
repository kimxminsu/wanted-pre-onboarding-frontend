import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import TodoListTemplate from "../components/TodoListTemplate";

export default function Todo (props) {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("JWT") === null)
     return navigate("/");
   })

  return (
   
      <TodoListTemplate form={<Form/>} />
   
  )
}