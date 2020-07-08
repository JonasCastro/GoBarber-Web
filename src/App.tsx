import React from 'react';

import GlobalStyle from './styles/global';

import SifnIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <SifnIn />
      <GlobalStyle />
    </>
  );
};

export default App;
