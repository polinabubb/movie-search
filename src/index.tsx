import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </React.StrictMode>
);
// </Provider>
reportWebVitals();


