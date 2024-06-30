import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {FilmsList} from './pages/films-list/films-list';
import {Filters} from './components/filters/filters';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {PrivateRoute} from './components/private-route/private-route'
import NotFoundPage from "./pages/not-found/not-found";
import {HelmetProvider} from 'react-helmet-async'
import {fetchFilmsAction} from "./store/api-actions";
import {store} from './store';
import {FilmPage} from './pages/film/film';

function App() {
    // const authorizationStatus = useAppSelector(getAuthorizationStatus);
    // const promoFilm = useAppSelector(getPromoFilm);
    // const hasError = useAppSelector(getErrorStatus);
    //  if (hasError) {
    //    return <Error />;
    // }
    return (
        <Routes>
            <Route
                path={AppRoute.Main}
                element={
                    <>
                        <Header/>
                        <main className="main">
                            <Filters/>
                            <FilmsList/>
                        </main>
                    </>
                }
            />
            <Route
                path={AppRoute.Film}
                element={<FilmPage />}
            />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
/*
 <Routes>
                <Route
                    path={AppRoute.Main}
                    element={
                        <>
                            <Header/>
                            <main className="main">
                                <Filters/>
                                <FilmsList/>
                            </main>
                        </>
                    }
                />
                <Route path={AppRoute.Login} element={<></>}/>
                <Route
                    path={AppRoute.Film}
                    element={<></>}
                />
                <Route
                    path={AppRoute.Logout}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                            <></>
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
 */