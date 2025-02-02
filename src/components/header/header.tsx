import './header.css';

export function Header(): JSX.Element {
    return (
        <header className="header">
            <span className="header__title">  Фильмопоиск </span>
            <div className="header__buttons">
                <button className="header__button-profile">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                            fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14.25 15C14.25 18.17 16.83 20.75 20 20.75C23.17 20.75 25.75 18.17 25.75 15C25.75 11.83 23.17 9.25 20 9.25C16.83 9.25 14.25 11.83 14.25 15ZM15.75 15C15.75 12.66 17.66 10.75 20 10.75C22.34 10.75 24.25 12.66 24.25 15C24.25 17.34 22.34 19.25 20 19.25C17.66 19.25 15.75 17.34 15.75 15ZM27.8401 30C27.8401 30.41 28.1801 30.75 28.5901 30.75C29.0001 30.75 29.3401 30.41 29.3401 30C29.3401 25.73 25.1502 22.25 20.0002 22.25C14.8502 22.25 10.6602 25.73 10.6602 30C10.6602 30.41 11.0002 30.75 11.4102 30.75C11.8202 30.75 12.1602 30.41 12.1602 30C12.1602 26.55 15.6802 23.75 20.0002 23.75C24.3202 23.75 27.8401 26.55 27.8401 30Z"
                              fill="#333333"/>
                    </svg>


                </button>
                <button className="header__button-logout">
                    Выйти
                </button>
            </div>
        </header>
    );
}

export default Header;
/*
 <button className="header__button-login">
                Войти
            </button>
 */