import { combineReducers } from '@reduxjs/toolkit';

import Todos from './todos/todoSlice';
import VisibilityFilter from './visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({ Todos, VisibilityFilter });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
