import { FC } from 'react';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/hook';
import './../TodoListItem.css';

import { toggleDoneTodo } from '../redux/todos/todoSlice';

const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
	const dispatch = useAppDispatch();

	const selectTodo = (selectedTodo: Todo) =>
		dispatch(toggleDoneTodo(selectedTodo));

	return (
		<li>
			<label className={todo.completed ? 'completed' : ''}>
				<input
					type='checkbox'
					onChange={() => selectTodo(todo)}
					checked={todo.completed}
				/>
				{todo.title}
			</label>
		</li>
	);
};

export default TodoListItem;
