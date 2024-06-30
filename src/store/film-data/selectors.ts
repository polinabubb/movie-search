import {NameSpace} from '../../const';
import {State, ShortMovieInfo, FullMovieInfo} from '../../types';
/*
export const getFilm = (state: Pick<State, NameSpace.Data>): FullMovieInfo | null =>
    state[NameSpace.Data].film;
 */
/*
export const getFilmDataLoadingStatus = (
    state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].isFilmLoading;

 */

export const getFilms = (state: Pick<State, NameSpace.Data>): ShortMovieInfo[] =>
    state[NameSpace.Data].films;
export const getCount = (state: Pick<State, NameSpace.Data>): number =>
    state[NameSpace.Data].filmsCount;
export const getFilmsDataLoadingStatus = (
    state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].isFilmsLoading;

export const getFilm = (state: Pick<State, NameSpace.Data>): FullMovieInfo | null =>
    state[NameSpace.Data].film;
export const getFilmDataLoadingStatus = (
    state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].isFilmLoading;
export const getFilmsCount = (state: Pick<State, NameSpace.Data>): number=>
    state[NameSpace.Data].filmsCount;

export const changeFilters = (state: Pick<State, NameSpace.Data>): { release_year: string, genre: string } =>
    state[NameSpace.Data].filters;

