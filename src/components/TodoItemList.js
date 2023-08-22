import React, { useState } from "react";
import styled from "styled-components";
import { updateTodo, deleteTodo } from "../apis/todo";

const TodoItemList = ({list}) => {
  const [isDone, setisDone] = useState(false);
  const [switchValue, setSwitchValue] = useState([]);
  const [BtnValue, setBtnValue] = useState(true);
  const [editVal, setEditVal] = useState("");
  const [word, setWord] = useState(list);
  const [listitem, setlist] = useState(list.todo);
  const [inputVal, setinputVal] = useState(list.isCompleted);

  const inputTxt = (e) => {
    setEditVal(e.target.value);
  };

  //취소버튼 숨기기
  const cancle = () => {
    setBtnValue(true);
    setisDone(!isDone);
    setSwitchValue([false]);
  };

  //check box
  const updateCheck = async (e) => {
    setinputVal(!inputVal);
    const data = {
      todo: listitem,
      isCompleted: !inputVal,
    };
    updateTodo(data, word).then((res) => {
      console.log(res);
      setlist(res.data.todo);
    });
  };

  //수정
  const onEdit = async (e) => {
    const data = {
      todo: editVal,
      isCompleted: inputVal,
    };
    updateTodo(data, word).then((res) => {
      console.log(res);
      setlist(res.data.todo);
    });
  };

  //삭제
  const onDel = async (e) => {
    deleteTodo(word).then((res) => {
      console.log(word);
      setWord({ id: 0 });
    });
  };
  if (word.id === 0) {
    return null;
  }

  return (
    <Todolist>
      <ul className={inputVal ? "show" : ""}>
        <li>
          <input
            className="checkbox"
            type="checkbox"
            checked={inputVal}
            onChange={updateCheck}
          />
        </li>
        <div className="text">
          {switchValue[list.id] ? (
            <input
              className="txtInput"
              type="text"
              onChange={inputTxt}
              defaultValue={listitem}
            ></input>
          ) : (
            <p className="listTxt">{listitem}</p>
          )}
        </div>
        <li className="rightBtn">
          {BtnValue ? (
            <button
              className="viewBtn"
              onClick={() => {
                let copy = [...switchValue];
                copy[list.id] = !copy[list.id];
                setSwitchValue(copy);
                setisDone(!isDone);
                setBtnValue(!BtnValue);
              }}
            >
              수정
            </button>
          ) : (
            <button
              className="viewBtn"
              onClick={() => {
                let copy = [...switchValue];
                copy[list.id] = !copy[list.id];
                setSwitchValue(copy);
                setisDone(!isDone);
                setBtnValue(!BtnValue);
                onEdit();
              }}
            >
              제출
            </button>
          )}
          {isDone && (
            <button className="cancleBtn" onClick={cancle}>
              취소
            </button>
          )}
          {BtnValue && (
            <button className="deleteBtn" onClick={onDel}>
              삭제
            </button>
          )}
        </li>
      </ul>
    </Todolist>
  );
}

const Todolist = styled.div`
  .show {
    display: flex;
    text-decoration: line-through;
    text-decoration-color: indianred;
  }
  ul {
    display: flex;
    justify-content: center;
    margin: 10px 0px 10px 0px;
    padding: 0;
    list-style: none;
  }
  .checkbox {
    vertical-align: middle;
    accent-color: indianred;
  }
  .text {
    width: 400px;
  }
  .txtInput {
    width: 350px;
    height: 22px;
    font-size: 18px;
  }
  .listTxt {
    font-size: 18px;
    text-align: left;
    margin: 0px;
  }
  .viewBtn,
  .cancleBtn,
  .deleteBtn {
    
  }
  .viewBtn {
    
  }
  .cancleBtn {
    
  }

  .deleteBtn {
    
  }
`;

export default TodoItemList;