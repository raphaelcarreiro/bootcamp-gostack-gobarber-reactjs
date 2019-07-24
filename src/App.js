import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

function App(props) {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default App;
