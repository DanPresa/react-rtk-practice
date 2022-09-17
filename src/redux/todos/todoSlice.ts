import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reducers";
import { AppDispatch } from "../store";

const initialState: InitialStateI = {
  todos: [],
  loading: false,
  error: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadingTodos: (state) => {
      state.loading = true;
    },
    loadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = false;
    },
    addTodoFn: (state, action: PayloadAction<string>) => {
      const newTodo = [
        ...state.todos,
        { title: action.payload, completed: false },
      ];

      state.todos = newTodo;
      state.loading = false;
      state.error = false;
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      let newTodos = state.todos.map((todo: Todo) => {
        if (todo.title === action.payload.title) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

      state.todos = newTodos;
      state.loading = false;
      state.error = false;
    },
    errorTodos: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const todoSelector = (state: RootState) => state.Todos;
export const { loadingTodos, loadTodos, errorTodos, toggleTodo, addTodoFn } =
  todoSlice.actions;
export default todoSlice.reducer;

// Actions
export const getAllTodos = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(loadingTodos());

    try {
      const InitialTodos: Todo[] = [
        { title: "Walk the dog", completed: false },
        { title: "Learn React", completed: false },
        { title: "Build an app", completed: false },
        { title: "Build an app using React", completed: false },
      ];

      dispatch(loadTodos(InitialTodos));
    } catch (error) {
      dispatch(errorTodos());
    }
  };
};

export const addNewTodo = (newTodo: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingTodos());

    try {
      dispatch(addTodoFn(newTodo));
    } catch (error) {
      console.log(error);
      dispatch(errorTodos());
    }
  };
};

export const toggleDoneTodo = (todo: Todo) => {
  return (dispatch: AppDispatch) => {
    dispatch(loadingTodos());

    try {
      dispatch(toggleTodo(todo));
    } catch (error) {
      console.log("error");
      dispatch(errorTodos());
    }
  };
};
