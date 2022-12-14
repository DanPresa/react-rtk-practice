import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilter {
	ShowAll = 'SHOW_ALL',
	ShowCompleted = 'SHOW_COMPLETED',
	ShowActive = 'SHOW_ACTIVE',
}

const initialState = VisibilityFilter.ShowAll;

const visibilityFilterSlice = createSlice({
	name: 'visibilityFilter',
	initialState,
	reducers: {
		setVisibilityFilter: (_, action: PayloadAction<VisibilityFilter>) => {
			// console.log(action.payload);
			return action.payload;
		},
	},
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;
export default visibilityFilterSlice.reducer;
