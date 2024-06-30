import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {PayloadAction} from '@reduxjs/toolkit';
import {
    fetchFilmsAction, fetchFilmByIdAction
} from '../api-actions';
import {ShortMovieInfo} from "../../types";
//import {getAuthorizationStatus} from '../user-process/selectors.ts';
//import { useAppSelector } from '../../hooks/index.ts';
type InitialState = {
    films: ShortMovieInfo[],
    filmsDisplayed: ShortMovieInfo[],
    isFilmsLoading: boolean,
    hasError: boolean,
    isFilmLoading: boolean
}
const initialState: InitialState = {
    films: [],
    filmsDisplayed: [],
    isFilmsLoading: false,
    hasError: false,
    isFilmLoading: false,
};

export const filmData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchFilmsAction.pending, (state) => {
                state.isFilmsLoading = true;
                state.hasError = false;
            })
            .addCase(fetchFilmsAction.fulfilled, (state, action) => {
                const films = action.payload;
                state.films = films;
                state.isFilmsLoading = false;
            })
            .addCase(fetchFilmsAction.rejected, (state) => {
                state.isFilmsLoading = false;
                state.hasError = true;
            })
            .addCase(fetchFilmByIdAction.pending, (state) => {
                state.isFilmLoading = true;
                state.hasError = false;
            })
            .addCase(fetchFilmByIdAction.fulfilled, (state, action) => {
                //state.film = action.payload;
                state.isFilmLoading = false;
            })
            .addCase(fetchFilmByIdAction.rejected, (state) => {
                state.isFilmLoading = false;
                state.hasError = true;
            })
    },
});
