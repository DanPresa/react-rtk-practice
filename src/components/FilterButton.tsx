import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setVisibilityFilter,
	VisibilityFilter,
} from '../redux/visibilityFilter/visibilityFilterSlice';
import { RootState } from '../redux/reducers';

interface FilterButtonProps {
	visibilityFilter: VisibilityFilter;
	text: string;
}

const FilterButton: FC<FilterButtonProps> = ({ visibilityFilter, text }) => {
	const dispatch = useDispatch();

	const currentVisibilityFilter = useSelector(
		(state: RootState) => state.VisibilityFilter
	);

	return (
		<button
			disabled={currentVisibilityFilter === visibilityFilter}
			onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
		>
			{text}
		</button>
	);
};

export default FilterButton;
