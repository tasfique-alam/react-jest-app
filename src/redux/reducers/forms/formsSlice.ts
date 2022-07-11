import {
  formsInitialState,
  FormsState,
} from '@/redux/reducers/forms/formsInitialState';
import { AppState } from '@/redux/store';
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState = formsInitialState;

export const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        setFormState(state, action: PayloadAction<Partial<{
            [key in keyof FormsState]: FormsState[key]
        }>>) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
    extraReducers(builder) {

    }
});

export const selectFormsState = (state: AppState) => state.forms;

export const {setFormState} = formsSlice.actions;
export default formsSlice.reducer;