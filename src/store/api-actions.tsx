import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types";
import {ShortMovieInfo} from "../types";
import {loadFilms} from "./action";
import { AxiosInstance } from 'axios';

export const fetchFilmsAction = createAsyncThunk<
    ShortMovieInfo[],
    undefined,
    {
        dispatch: AppDispatch;
        extra: AxiosInstance;
    }
>('data/fetchFilms', async (_arg, { extra: api }) => {
    const { data } = await api.get<{search_result:ShortMovieInfo[]}>("http://localhost:3030/api/v1/search");
    return data.search_result;
});


export const fetchFilmByIdAction =
    createAsyncThunk<
        void,
        undefined,
        {
            dispatch: AppDispatch;
            state: State;
        }
    >("data/fetchFilm", async (_arg, {dispatch}) => {


        const data = await fetch("http://localhost:3030/api/v1/movie/1");
        await data.json().then(function (response) {
            const serverChats = response.data;
            dispatch(loadFilms(serverChats));
            console.log(serverChats);
        });
    });
