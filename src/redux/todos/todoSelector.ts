import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

const getTodos = (state: RootState) => state.Todos.todos;

export const getCountAllTask = createSelector(
	getTodos,
	(todos: Todo[]) => todos.length
);

export const getCompletedTasks = createSelector(getTodos, (todos: Todo[]) =>
	todos.filter((todo: Todo) => todo.completed)
);

/* export const getCountCompletedTasks = createSelector(
	[getCompletedTasks],
	(todos) => todos.length
); */

export const getCountCompletedTasks = createSelector(
	getCompletedTasks,
	(todos: Todo[]) => todos.length
);
