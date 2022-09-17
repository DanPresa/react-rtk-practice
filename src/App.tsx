import { FC, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from './redux/hook';

import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';

import { getAllTodos } from './redux/todos/todoSlice';

const App: FC<{}> = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllTodos());
	}, []);

	return (
		<>
			<h1>Todo react app with typescript</h1>
			<FormTodo />
			<br />
			<TodoList />
		</>
	);
};

export default App;
