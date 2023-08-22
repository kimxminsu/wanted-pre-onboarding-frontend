import React, { useState ,useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Text} from "../elements/index";
import { getTodos } from '../apis/todo';
import Form from '../components/Form';
import TodoItemList from './TodoItemList';

const TodoListTemplate = () => {
  
  const [todos, setTodos] = useState([]);
  const [word, setWord] = useState(true);
  
  //get 요청
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, [word]);

  return (
    <TodoTempliate>
      <Grid textAlign="center" width="200px" margin="auto" >
        <Text size="32px" bold>
          Todo
        </Text>
      </Grid>
      <FormWrapper>
        <Form word = {word} setWord = {setWord}/>
      </FormWrapper>
      <TodosWrapper>
        {todos.map((list) => (
          <TodoItemList key={list.id} list={list}/>
        ))}
      </TodosWrapper>
    </TodoTempliate>
  );
};

export default TodoListTemplate;

const TodoTempliate = styled.main`
  width: 600px;
  margin: 0 auto;
  margin-top: 4rem;
`

const FormWrapper = styled.section`
  padding: 0rem 10rem;
`

const TodosWrapper = styled.section`
  padding-bottom: 3px;
  min-height: 5rem;
`