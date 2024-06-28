import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {FilmsList} from './components/films-list/films-list';
import {Filters} from './components/filters/filters';
function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Filters/>
                <FilmsList/>
            </main>

        </>

)
    ;
}

export default App;
