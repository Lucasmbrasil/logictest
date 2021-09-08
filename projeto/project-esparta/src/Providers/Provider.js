import { useContext, useState } from "react";
import { createContext } from "react";

const TodoContext = createContext();

export const CreateTodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const addTodoList = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const deleteTodoList = (deletedTodo) => {
    const remove = todoList.filter((item) => item !== deletedTodo);
    return setTodoList(remove);
  };
  const addTodoDone = (favTodo) => {
    const favorite = todoList.find((item) => item === favTodo);
    // const remove = todoList.filter((item) => item !== favTodo);
    // setTodoList(remove);
    setDoneList([...doneList, favorite]);
  };
  const removeTodoDone = (favTodo) => {
    // const favorite = doneList.find((item) => item === favTodo);
    const remove = doneList.filter((item) => item !== favTodo);
    setDoneList(remove);
    // setTodoList([...todo, favorite]);
  };
  const deleteFavTodo = (deletedTodo) => {
    const remove = doneList.filter((item) => item !== deletedTodo);
    return setDoneList(remove);
  };

  return (
    <TodoContext.Provider
      value={{
        addTodoList,
        deleteTodoList,
        addTodoDone,
        removeTodoDone,
        deleteFavTodo,
        setTodoList,
        todoList,
        doneList,
        setDoneList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useCreateTodo = () => useContext(TodoContext);
