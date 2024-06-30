import {GENRES} from './const';
import { store } from "./store";
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
type Actor = {
    name: string;
    photo: string; // base64 img
}
export type FullMovieInfo = {
    id: string;
    title: string;
    description: string;
    release_year: number;
    poster: string; //base64 img
    genre: string;
    rating: string; //float
    total_rates_count: string; //int
    actors: Actor[];
}
export type ShortMovieInfo = Omit<FullMovieInfo, "actors" | "total_rates_count">;

