import React from 'react';
import './fontawesome';
//components
import Header from './components/Header';
import Footer from './components/footer/Footer';
//pages
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Service from './components/Service';
import Special from './components/Special';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  }
])
const App = () => {
  return <div>
    <Header />
    <RouterProvider router={router} />
    <Service />
  <Special />
    <Footer />
  </div>;
};

export default App;
