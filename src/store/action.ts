import {createAction} from "@reduxjs/toolkit";
import {FullMovieInfo} from "../types";

export const loadFilms = createAction< FullMovieInfo[] >("changeChat");
