import { FC, ChangeEvent, FormEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/hook';
import { addNewTodo } from '../redux/todos/todoSlice';

const FormTodo: FC<{}> = () => {
	const dispatch = useAppDispatch();

	const [newTodo, setNewTodo] = useState<string>('');

	const onInputChange = ({ target: input }: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(input.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(addNewTodo(newTodo));
		setNewTodo('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' onChange={onInputChange} value={newTodo} />
			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default FormTodo;
