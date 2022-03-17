import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Events from './views/Events';
import Buy from './views/Buy';
import eventReducers from './reducers/eventReducers';
import Tickets from './views/Tickets';


const store = createStore(
  //Inne här matar man in reduser
  eventReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //Denna är till för Redux devtools i chrome
)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/buy/:eventID" element={<Buy />} />
            <Route path="/tickets/:eventID" element={<Tickets />} />
            {/* <Route path="/buy/:eventId" element={<Buy />} /> */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
                }
            />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
