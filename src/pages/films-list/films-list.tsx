import FilmsListItem from './film-list-item';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilms, getFilmsDataLoadingStatus, getCount} from '../../store/film-data/selectors';
import {incrementFilmsCount} from '../../store/film-data/film-data';
import {ShortMovieInfo} from '../../types';
import {Spinner} from '../../components/spinner/spinner';
import {useEffect, useRef} from 'react';
import {store} from "../../store";
import {fetchFilmByIdAction, fetchFilmsAction} from "../../store/api-actions";

export function FilmsList(): JSX.Element {
    const films = useAppSelector(getFilms) as ShortMovieInfo[];
    const dispatch = useAppDispatch();
    const count = useAppSelector(getCount);
    const isFilmsLoading = useAppSelector(getFilmsDataLoadingStatus);
    const onSubmitHandler = (env: { preventDefault: () => void; }) => {
        env.preventDefault();
        if (search.current){
            dispatch(fetchFilmsAction({limit:count, title:search.current.value}));
        }
        else{
            dispatch(fetchFilmsAction({limit:count, title:''}));
        }
    }
    const search = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
            dispatch(fetchFilmsAction({limit:count, title:''}));
    }, [dispatch]);
    return (
        <div className="films">
            <form action="" method="get" className="films__search" onSubmit={onSubmitHandler}>
                <button type="submit">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M0.832031 7.66732C0.832031 11.434 3.8987 14.5007 7.66536 14.5007C11.432 14.5007 14.4987 11.434 14.4987 7.66732C14.4987 3.90065 11.432 0.833984 7.66536 0.833984C3.8987 0.833984 0.832031 3.90065 0.832031 7.66732ZM1.83203 7.66732C1.83203 4.45398 4.44536 1.83398 7.66536 1.83398C10.8854 1.83398 13.4987 4.45398 13.4987 7.66732C13.4987 10.8807 10.8854 13.5007 7.66536 13.5007C4.44536 13.5007 1.83203 10.8807 1.83203 7.66732ZM14.312 15.0206C14.412 15.1206 14.5387 15.1672 14.6654 15.1672C14.792 15.1672 14.9187 15.1206 15.0187 15.0206C15.212 14.8272 15.212 14.5072 15.0187 14.3139L13.6854 12.9806C13.492 12.7872 13.172 12.7872 12.9787 12.9806C12.7854 13.1739 12.7854 13.4939 12.9787 13.6872L14.312 15.0206Z"
                              fill="#999FA6"/>
                    </svg>
                </button>
                <input name="s" placeholder="Название фильма" type="search" ref={search}/>
            </form>
            {isFilmsLoading ? <Spinner/> :<div className="films__page"><div className="films__list">
                {[...films].map((film) => {
                    return <FilmsListItem {...film} key={film.id}></FilmsListItem>
                })}</div>
                <button className="films__button" onClick={()=>{dispatch(incrementFilmsCount())
                    if (search.current){
                        dispatch(fetchFilmsAction({limit:count, title:search.current.value}));
                    }
                    else {
                        dispatch(fetchFilmsAction({limit:count, title:''}));
                    }
                }}>
                    Показать еще
                </button>
            </div>}

        </div>
    );
}

export default FilmsList;
