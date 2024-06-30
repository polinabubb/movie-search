import {ShortMovieInfo} from '../../types';
import {StarsRating} from './star-rating';
import './films-list.css';
import {useNavigate} from "react-router-dom";


export function FilmsListItem({id, title, description, poster, release_year, genre}: ShortMovieInfo): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="film-item" key={id} onClick={() => navigate(`/api/v1/movie/${id}`)}>
            <div className="film-item__container">
                <img src={poster} alt="постер" className="film-item__img"/>
                <div className="film-item__information">
                    <div className="film-item__title">{title}</div>
                    <div className="film-item__genre">
                        <div className="genre__name">Жанр</div>
                        <div className="genre__value">{genre}</div>
                    </div>
                    <div className="film-item__year">
                        <div className="year__name">Год выпуска</div>
                        <div className="year__value">{release_year}</div>
                    </div>
                    <div className="film-item__description">
                        <div className="description__name">Описание</div>
                        <div className="description__value">{description}</div>
                    </div>
                </div>
            </div>
            <StarsRating stars={[{number: 1, isMarked: true},
                {number: 2, isMarked: true},
                {number: 3, isMarked: true},
                {number: 4, isMarked: false},
                {number: 5, isMarked: false}]}/>
        </div>
    );
}

export default FilmsListItem;
