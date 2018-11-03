import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../state/store';

it('App renders without crashing', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
  ReactDOM.unmountComponentAtNode(container);
});
