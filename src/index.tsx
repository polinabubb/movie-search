import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {HelmetProvider} from 'react-helmet-async'
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode> <HelmetProvider>
        <Provider store={store}> <HistoryRouter history={browserHistory}>
            <App/> </HistoryRouter>
        </Provider> </HelmetProvider>
    </React.StrictMode>
);

// <Provider store={store}></Provider>
reportWebVitals();


