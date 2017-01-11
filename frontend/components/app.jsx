import React from 'react';

import Footer from './footer';
import Header from './header/header';

const App = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

export default App;
