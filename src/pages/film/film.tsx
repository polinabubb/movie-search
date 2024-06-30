import {useParams} from 'react-router';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {
    getFilm,
    getFilmDataLoadingStatus,
} from '../../store/film-data/selectors';
import {
    fetchFilmByIdAction
} from '../../store/api-actions';
import {useEffect} from 'react';
//import {NotFoundPage} from '../not-found/not-found';
import {Spinner} from '../../components/spinner/spinner';
import StarsRating from "../films-list/star-rating";
import './film.css';

export function FilmPage(): JSX.Element {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const film = useAppSelector(getFilm);

    const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

    useEffect(() => {
        if (id) {
            dispatch(fetchFilmByIdAction(id));
        }
    }, [dispatch, id]);

    if (!film) {
        return <></>;
    }
    console.log(film.actors);
    if (isFilmDataLoading) {
        return <Spinner/>;
    }

    return (
        <div className="film-page">
            <div className="film-page__container">
                <img className="film-page__poster" src={film.poster} alt="poster"></img>
                <div className="film-page__info">
                    <div className="film-page__header">
                        <div className="film-page__title">{film.title}</div>
                        <StarsRating stars={[{number: 1, isMarked: true},
                            {number: 2, isMarked: true},
                            {number: 3, isMarked: true},
                            {number: 4, isMarked: false},
                            {number: 5, isMarked: false}]}/>
                    </div>

                    <div className="film-page__info-items">


                        <div className="info-item">
                            Жанр:
                            <div className="info-item__value">{film.genre}</div>
                        </div>

                        <div className="info-item">
                            Год выпуска:
                            <div className="info-item__value">{film.release_year}</div>
                        </div>

                        <div className="info-item">
                            Рейтинг:
                            <div className="info-item__value">{film.rating}</div>
                        </div>


                        <div className="info-item info-item__description">
                            Описание
                            <div className="info-item__value">{film.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="film-page__actors">
                Актёры
                <div className="actors-list">
                    {film.actors.map((actor) => {
                        return <div className="actors-item">
                            <img className="actors-item__img" src={actor.photo} alt=""/>
                            {actor.name}
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
}

export default FilmPage;