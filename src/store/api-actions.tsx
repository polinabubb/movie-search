import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types";
import {ShortMovieInfo, FullMovieInfo} from "../types";
import {AxiosInstance} from 'axios';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
    incrementFilmsCount
} from '../store/film-data/film-data';
import {getCount} from "./film-data/selectors";

export const fetchFilmsAction = createAsyncThunk<
    ShortMovieInfo[],
    { limit: number, title: string },
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchFilms', async (args, {extra: api}) => {
    //console.log(`http://localhost:3030/api/v1/search/?limit=${filmsCount}${title !== '' ? '&title="' + title + '"' : ''}`);
    const {limit, title} = args;
    console.log(`http://localhost:3030/api/v1/search/?limit=${limit}${title !== '' && title ? '&title="' + title + '"' : ''}`);
    const {data} = await api.get<{
        search_result: ShortMovieInfo[]
    }>(`http://localhost:3030/api/v1/search/?limit=${limit}${title !== '' && title ? '&title=' + title.toLowerCase() + '' : ''}`);
    return data.search_result;
});


export const fetchFilmByIdAction = createAsyncThunk<
    FullMovieInfo,
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('data/fetchFilm', async (id, {extra: api}) => {
    const {data} = await api.get<FullMovieInfo>(`http://localhost:3030/api/v1/movie/${id}`);
    return data;
});
