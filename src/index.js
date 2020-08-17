import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import GlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configStore from './store/index';


const renderApp = () => {

  const store = configStore({});

  if (process.env.NODE_ENV !== "production"){
    console.log("INitial state: ", store.getState())
  }

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
