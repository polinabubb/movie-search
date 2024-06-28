import {DropDown} from './drop-down';
import {Genres, YEARS} from "../../const";
import './filters.css';
export function Filters(): JSX.Element {
    return (
        <div className="filters">
            <span>Фильтр</span>
            <div className="filter">
                <div className="filter__name">
                    Жанр
                </div>
                <DropDown dropDownList={Genres} placeholder="Выберите жанр"/>
            </div>

            <div className="filter">
                <div className="filter__name">
                    Год выпуска
                </div>
                <DropDown dropDownList={YEARS} placeholder="Выберите год"/>
            </div>
        </div>
    );
}

export default Filters;
