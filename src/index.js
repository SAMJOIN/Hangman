import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './State/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
function rerender(state) {
  
  root.render(
    <React.StrictMode>
      <App state={state}
        dispatch={store.dispatch.bind(store)} />          {/* Не забывать про bind!!! Иначе при вызове dispatch будут создаваться копии store, к которым нельзя обращаться через this */}
    </React.StrictMode>
  );
}

rerender(store.getState());
store.subscribe(rerender);


reportWebVitals();
