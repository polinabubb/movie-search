import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {FilmsList} from './components/films-list/films-list';
import {Filters} from './components/filters/filters';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {PrivateRoute} from './components/private-route/private-route'
import NotFoundPage from "./components/not-found/not-found";
import {HelmetProvider} from 'react-helmet-async'
import {fetchFilmByIdAction} from "./store/api-actions";
import {store} from './store';

store.dispatch(fetchFilmByIdAction());
function App() {
    // const authorizationStatus = useAppSelector(getAuthorizationStatus);
    // const promoFilm = useAppSelector(getPromoFilm);
    // const hasError = useAppSelector(getErrorStatus);
    //  if (hasError) {
    //    return <Error />;
    // }
    return (
<HelmetProvider>
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
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes></HelmetProvider>
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