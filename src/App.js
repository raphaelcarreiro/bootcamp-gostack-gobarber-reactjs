import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store, persistor } from 'store';
import GlobalStyle from './styles/global';

function App(props) {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        {children}
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default App;
