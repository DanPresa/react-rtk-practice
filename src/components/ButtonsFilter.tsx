import { FC } from 'react';

interface ButtonsFilterProps {
	setShow: (text: string) => void;
}

const ButtonsFilter: FC<ButtonsFilterProps> = ({ setShow }) => {
	return (
		<>
			<button type='button' onClick={() => setShow('all')}>
				All
			</button>
			<button type='button' onClick={() => setShow('active')}>
				Actives
			</button>
			<button type='button' onClick={() => setShow('completed')}>
				Completed
			</button>
		</>
	);
};

export default ButtonsFilter;
