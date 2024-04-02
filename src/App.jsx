import React from 'react';
import NavItems from './Components/NavItems';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      <NavItems/>
      <Outlet />
    </div>
  );
}

export default App;