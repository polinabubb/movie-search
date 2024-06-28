import {GENRES} from './const';

export type FilmType = {
    id: string,
    title: string,
    description: string,
    image: string,
    year: number,
    genre: GENRES
}