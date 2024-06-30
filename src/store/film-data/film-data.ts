import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {PayloadAction} from '@reduxjs/toolkit';
import {
    fetchFilmsAction, fetchFilmByIdAction
} from '../api-actions';
import {FullMovieInfo, ShortMovieInfo} from "../../types";
//import {getAuthorizationStatus} from '../user-process/selectors.ts';
//import { useAppSelector } from '../../hooks/index.ts';
type InitialState = {
    films: ShortMovieInfo[],
    filters: { release_year: string, genre: string },
    filteredFilms: ShortMovieInfo[],
    film: FullMovieInfo | null,
    filmsDisplayed: ShortMovieInfo[],
    isFilmsLoading: boolean,
    hasError: boolean,
    isFilmLoading: boolean,
    isActorsLoading: boolean,
    filmsCount: number,
}
const initialState: InitialState = {
    films: [],
    filters: {release_year: '', genre: ''},
    filteredFilms: [],
    film: null,
    filmsDisplayed: [],
    isFilmsLoading: false,
    hasError: false,
    isFilmLoading: false,
    isActorsLoading: false,
    filmsCount: 10,
};

export const filmData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        incrementFilmsCount(state) {
            state.filmsCount = state.filmsCount + 10;
        },},
    extraReducers(builder) {
        builder
            .addCase(fetchFilmsAction.pending, (state) => {
                state.isFilmsLoading = true;
                state.hasError = false;
            })
            .addCase(fetchFilmsAction.fulfilled, (state, action) => {
                const films = action.payload;
                state.films = films;
                state.filteredFilms = films;
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
                state.film = action.payload;
                state.isFilmLoading = false;
            })
            .addCase(fetchFilmByIdAction.rejected, (state) => {
                state.isFilmLoading = false;
                state.hasError = true;
            });
    },
});
export const {
   incrementFilmsCount
} = filmData.actions;