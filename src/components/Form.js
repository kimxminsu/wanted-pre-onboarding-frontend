import React, { useRef, useState }from 'react';
import styled from 'styled-components';
import { createTodo } from '../apis/todo';

const Form = ({word, setWord}) => {

  const inputRef = useRef();

  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  // 할 일 생성 post 요청
  const onSubmit = (e) => {
    inputRef.current.focus();
    e.preventDefault();

    const data = {
      todo: todoInput,
    };
    console.log(data)
    createTodo(data).then((res) => {
      setWord(!word);
      setTodoInput("");
    });
  };

  return (
    <FormBox onChange={handleChange}>
      <Input 
        value={todoInput}
        onChange={handleChange}
        ref={inputRef}
        placeholder="할 일을 입력해주세요!"/>
      <Button onClick={onSubmit}>
        추가하기
      </Button>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.form`
  display: flex;
`
const Input = styled.input`\
`

const Button = styled.button`
`