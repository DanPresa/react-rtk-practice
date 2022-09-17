import { FC } from 'react';
//import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/hook';
import { RootState } from '../redux/reducers';
import FilterButton from './FilterButton';
import {
	getCountAllTask,
	getCountCompletedTasks,
} from '../redux/todos/todoSelector';
import { VisibilityFilter } from '../redux/visibilityFilter/visibilityFilterSlice';
import TodoListItem from './TodoListItem';
import { todoSelector } from '../redux/todos/todoSlice';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
	switch (filter) {
		case VisibilityFilter.ShowAll:
			return todos;
		case VisibilityFilter.ShowCompleted:
			return todos.filter((t) => t.completed);
		case VisibilityFilter.ShowActive:
			return todos.filter((t) => !t.completed);
		default:
			console.log(filter);
			throw new Error('Unknown filter: ' + filter);
	}
};

const TodoList: FC<{}> = () => {
	const { loading } = useAppSelector(todoSelector);
	const todos = useAppSelector((state: RootState) =>
		getVisibleTodos(state.Todos.todos, state.VisibilityFilter)
	);

	return (
		<>
			<CompleteTodosCounter />
			<>
				<FilterButton visibilityFilter={VisibilityFilter.ShowAll} text='All' />
				<FilterButton
					visibilityFilter={VisibilityFilter.ShowActive}
					text='Active'
				/>
				<FilterButton
					visibilityFilter={VisibilityFilter.ShowCompleted}
					text='Completed'
				/>
			</>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{todos.map((todo: Todo, i: number) => (
						<TodoListItem key={i} todo={todo} />
					))}
				</ul>
			)}
		</>
	);
};

const CompleteTodosCounter: FC<{}> = () => {
	const countCompletedTasks = useAppSelector(getCountCompletedTasks);
	const countAllTodos = useAppSelector(getCountAllTask);

	return (
		<div>
			<b>{countCompletedTasks}</b> completed of {countAllTodos} todos
		</div>
	);
};

export default TodoList;
