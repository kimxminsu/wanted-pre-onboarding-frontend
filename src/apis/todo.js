import {requiredInstance} from "./index"

// 투두 리스트 요청 API

// 추가
export const createTodo = async (data) => {
  try {
    const res = await requiredInstance.post("/todos", data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 조회
export const getTodos = async () => {
  try {
    const res = await requiredInstance.get("/todos");
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 수정
export const updateTodo = async (data, word) => {
  try {
    const res = await requiredInstance.put(`/todos/${word.id}`, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 삭제
export const deleteTodo = async (word) => {
  try {
    const res = await requiredInstance.delete(`/todos/${word.id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};