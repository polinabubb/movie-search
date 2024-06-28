import {FilmType} from '../../types';
import {StarsRating} from './star-rating';
import './films-list.css';

export function FilmsListItem({id, title, description, image, year, genre}: FilmType): JSX.Element {
    return (
        <div className="film-item" key={id}>
            <div className="film-item__container">
                <img src={image} alt="постер" className="film-item__img"/>
                <div className="film-item__information">
                    <div className="film-item__title">{title}</div>
                    <div className="film-item__genre">
                        <div className="genre__name">Жанр</div>
                        <div className="genre__value">{genre}</div>
                    </div>
                    <div className="film-item__year">
                        <div className="year__name">Год выпуска</div>
                        <div className="year__value">{year}</div>
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
