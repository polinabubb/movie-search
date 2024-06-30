export {}

export enum GENRES {
    emptyField = 'Не выбран',
    comedy = 'Комедия',
    drama = 'Драма',
    action = 'Боевик',
    thriller = 'Триллер',
    horror = 'Ужасы',
    family = 'Семейный',
    cartoon = 'Анимированный',
    fantasy = 'Фэнтези',
    romance = 'Романтика',
    adventure = 'Приключения',
    musical = 'Мьюзикл',
    war = 'Военный',
}

export const Genres: GENRES[] = [
    GENRES.emptyField, GENRES.war, GENRES.comedy, GENRES.drama, GENRES.action, GENRES.thriller, GENRES.horror, GENRES.family, GENRES.fantasy, GENRES.romance, GENRES.adventure, GENRES.musical
]

export const YEARS = [
    'Не выбран',
    '2009',
    '2008',
    '2007',
    '2006',
    '1990-2005',
    '1950-1989'
];
export enum AppRoute {
    Main = '/',
    Login = '/login',
    Logout = '/logout',
    Film = '/api/v1/movie/:id',
}
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}export enum NameSpace {
    Data = 'DATA',
    User = 'USER',
}