import React from 'react';
import { Route } from 'react-router-dom';
import Com from '../pages/Com';
import Characters from '../pages/Characters';



const Routes = () => {

  const routes = [
    {
      path: '/comics',
      component: <Com/>
    },
    {
      path: '/',
      component: <Characters/>
    },
  ];



  return (
    <>
      {routes.map((route, index) => (
         <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </>
  );
};

export default Routes;
